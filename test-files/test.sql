-- =============================================================================
-- SONDER Theme — SQL Test File
-- Tests: keywords, identifiers, types, functions, comments, CTEs, window functions,
--        transactions, constraints, subqueries, operators
-- =============================================================================

-- ─── Schema Definition ───────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.dim_users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(64) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    role VARCHAR(32) NOT NULL DEFAULT 'developer' CHECK (role IN ('developer', 'designer', 'admin')),
    status VARCHAR(16) NOT NULL DEFAULT 'ACTIVE',
    reputation_score NUMERIC(8, 2) NOT NULL DEFAULT 100.00,
    theme_preference JSONB NOT NULL DEFAULT '{"name": "SONDER — Midnight Dark"}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp()
);

CREATE TABLE IF NOT EXISTS public.fct_audit_events (
    event_id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.dim_users(user_id) ON DELETE CASCADE,
    action VARCHAR(64) NOT NULL,
    payload JSONB,
    ip_address INET,
    is_failure BOOLEAN NOT NULL DEFAULT FALSE,
    duration_ms INTEGER,
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_audit_user_recorded
    ON public.fct_audit_events (user_id, recorded_at DESC);

CREATE INDEX IF NOT EXISTS idx_users_theme_gin
    ON public.dim_users USING GIN (theme_preference);

-- ─── Data Insertion ──────────────────────────────────────────────────────────
INSERT INTO public.dim_users (username, email, role, status, reputation_score)
VALUES 
    ('sonder_dev', 'developer@sonder.design', 'developer', 'ACTIVE', 1250.50),
    ('abyss_user', 'user@sonder.design', 'designer', 'ACTIVE', 980.00),
    ('admin_user', 'admin@sonder.design', 'admin', 'ACTIVE', 4500.25)
ON CONFLICT (email) DO UPDATE 
SET updated_at = clock_timestamp(),
    reputation_score = dim_users.reputation_score + 10.0;

-- ─── Complex Analytical Query (CTE, Window Functions, Aggregations) ───────────
WITH RankedActivity AS (
    SELECT 
        u.user_id,
        u.username,
        u.role,
        e.action,
        e.duration_ms,
        e.recorded_at,
        ROW_NUMBER() OVER (
            PARTITION BY u.user_id 
            ORDER BY e.recorded_at DESC
        ) AS rank_recent,
        AVG(e.duration_ms) OVER (
            PARTITION BY u.role
        ) AS role_avg_duration
    FROM public.dim_users u
    INNER JOIN public.fct_audit_events e 
        ON u.user_id = e.user_id
    WHERE u.status = 'ACTIVE'
      AND e.recorded_at >= NOW() - INTERVAL '30 days'
),
SummaryMetrics AS (
    SELECT 
        role,
        COUNT(DISTINCT user_id) AS active_user_count,
        COUNT(*) AS total_actions,
        ROUND(AVG(duration_ms), 2) AS avg_duration_ms,
        SUM(CASE WHEN duration_ms > 1000 THEN 1 ELSE 0 END) AS slow_query_count,
        COALESCE(MAX(duration_ms), 0) AS peak_duration_ms
    FROM RankedActivity
    GROUP BY role
    HAVING COUNT(*) > 5
)
SELECT 
    s.role,
    s.active_user_count,
    s.total_actions,
    s.avg_duration_ms,
    s.slow_query_count,
    s.peak_duration_ms,
    CASE 
        WHEN s.avg_duration_ms < 150 THEN 'OPTIMAL (#7EC86E)'
        WHEN s.avg_duration_ms BETWEEN 150 AND 500 THEN 'ACCEPTABLE (#C4C43F)'
        ELSE 'DEGRADED (#F74B8C)'
    END AS performance_bracket
FROM SummaryMetrics s
ORDER BY s.total_actions DESC, s.avg_duration_ms ASC;

-- ─── Transaction Block with Error Handling ────────────────────────────────────
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;

SAVEPOINT sp_user_update;

UPDATE public.dim_users
SET reputation_score = reputation_score + 50.00,
    updated_at = NOW()
WHERE role = 'developer'
  AND status = 'ACTIVE';

-- Conditional release or rollback
RELEASE SAVEPOINT sp_user_update;

COMMIT;

