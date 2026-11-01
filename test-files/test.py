"""
SONDER Theme — Python Test File
Tests: imports, classes, decorators, f-strings, type hints,
       async/await, comprehensions, generators, lambda, dataclasses
"""

from __future__ import annotations

import asyncio
import functools
import re
import time
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from enum import Enum, auto
from pathlib import Path
from typing import (
    Any,
    Callable,
    ClassVar,
    Final,
    Generator, 
    Generic,
    Iterator,
    Optional,
    Protocol,
    TypeVar,
    Union,
    overload,
)

# ─── Constants ────────────────────────────────────────────────────────────────
MAX_RETRIES: Final[int] = 3
BASE_URL: Final[str] = "https://api.sonder.design/v1"
PALETTE: Final[dict[str, str]] = {
    "ai": "#2E2D67",
    "fuji": "#B37DD3",
    "uguisu": "#AAAA3B",
    "kure": "#F72BB4",
    "shiro": "#E6E8FB",
}

EMAIL_REGEX: re.Pattern[str] = re.compile(
    r"^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
)

# ─── TypeVars ─────────────────────────────────────────────────────────────────
T = TypeVar("T")
T_co = TypeVar("T_co", covariant=True)
KT = TypeVar("KT")
VT = TypeVar("VT")


# ─── Enum ─────────────────────────────────────────────────────────────────────
class Status(Enum):
    PENDING = auto()
    ACTIVE = auto()
    INACTIVE = auto()
    DELETED = auto()

    @property
    def is_active(self) -> bool:
        return self == Status.ACTIVE

    def __str__(self) -> str:
        return self.name.lower()


class Priority(Enum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3
    CRITICAL = 4


# ─── Protocol ─────────────────────────────────────────────────────────────────
class Identifiable(Protocol):
    @property
    def id(self) -> str: ...

    @property
    def created_at(self) -> float: ...


class Serializable(Protocol[T_co]):
    def to_dict(self) -> dict[str, Any]: ...

    @classmethod
    def from_dict(cls, data: dict[str, Any]) -> T_co: ...


# ─── Decorators ───────────────────────────────────────────────────────────────
def retry(max_attempts: int = 3, delay: float = 0.5) -> Callable:
    """Retry decorator with exponential backoff."""
    def decorator(func: Callable) -> Callable:
        @functools.wraps(func)
        async def async_wrapper(*args: Any, **kwargs: Any) -> Any:
            last_exc: Exception | None = None
            for attempt in range(max_attempts):
                try:
                    return await func(*args, **kwargs)
                except Exception as exc:
                    last_exc = exc
                    wait = delay * (2 ** attempt)
                    print(f"Attempt {attempt + 1} failed: {exc}. Retrying in {wait:.1f}s...")
                    await asyncio.sleep(wait)
            raise RuntimeError(f"All {max_attempts} attempts failed") from last_exc

        @functools.wraps(func)
        def sync_wrapper(*args: Any, **kwargs: Any) -> Any:
            last_exc = None
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as exc:
                    last_exc = exc
                    time.sleep(delay * (2 ** attempt))
            raise RuntimeError(f"All {max_attempts} attempts failed") from last_exc

        if asyncio.iscoroutinefunction(func):
            return async_wrapper
        return sync_wrapper

    return decorator


def log_call(func: Callable) -> Callable:
    """Simple call logger."""
    @functools.wraps(func)
    def wrapper(*args: Any, **kwargs: Any) -> Any:
        name = func.__qualname__
        print(f"[LOG] Calling {name}")
        result = func(*args, **kwargs)
        print(f"[LOG] {name} returned {result!r}")
        return result
    return wrapper


# ─── Dataclass ────────────────────────────────────────────────────────────────
@dataclass(frozen=True, slots=True)
class Color:
    """Immutable color value object."""
    hex: str
    name: str
    japanese: str
    romanji: str

    def __post_init__(self) -> None:
        if not re.match(r"^#[0-9A-Fa-f]{6}$", self.hex):
            raise ValueError(f"Invalid hex color: {self.hex!r}")

    @property
    def rgb(self) -> tuple[int, int, int]:
        h = self.hex.lstrip("#")
        return int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)

    @property
    def luminance(self) -> float:
        """Relative luminance (WCAG formula)."""
        def linearize(c: int) -> float:
            v = c / 255
            return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4

        r, g, b = self.rgb
        return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b)

    def contrast_against(self, other: Color) -> float:
        """Calculate WCAG contrast ratio against another color."""
        l1, l2 = self.luminance, other.luminance
        lighter, darker = max(l1, l2), min(l1, l2)
        return (lighter + 0.05) / (darker + 0.05)

    def __repr__(self) -> str:
        return f"Color(hex={self.hex!r}, name={self.name!r}, {self.japanese})"


@dataclass
class User:
    """User entity with validation."""
    _id_counter: ClassVar[int] = 0

    name: str
    email: str
    role: str = "user"
    status: Status = Status.ACTIVE
    tags: list[str] = field(default_factory=list)
    metadata: dict[str, Any] = field(default_factory=dict)
    id: str = field(init=False)
    created_at: float = field(init=False)

    def __post_init__(self) -> None:
        User._id_counter += 1
        self.id = f"usr_{User._id_counter:04d}"
        self.created_at = time.time()
        self._validate()

    def _validate(self) -> None:
        if not self.name.strip():
            raise ValueError("Name cannot be empty")
        if not EMAIL_REGEX.match(self.email):
            raise ValueError(f"Invalid email: {self.email!r}")
        if self.role not in {"admin", "user", "guest"}:
            raise ValueError(f"Unknown role: {self.role!r}")

    def to_dict(self) -> dict[str, Any]:
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "role": self.role,
            "status": str(self.status),
            "tags": self.tags,
            "metadata": self.metadata,
            "created_at": self.created_at,
        }

    def __str__(self) -> str:
        return f"User({self.id}, {self.name!r}, {self.email!r}, {self.status})"

    def __repr__(self) -> str:
        return (
            f"User(name={self.name!r}, email={self.email!r}, "
            f"role={self.role!r}, status={self.status!r})"
        )


# ─── Generic Repository ────────────────────────────────────────────────────────
class Repository(ABC, Generic[T]):
    """Abstract generic repository."""

    @abstractmethod
    def find_by_id(self, entity_id: str) -> Optional[T]:
        ...

    @abstractmethod
    def find_all(self) -> list[T]:
        ...

    @abstractmethod
    def save(self, entity: T) -> T:
        ...

    @abstractmethod
    def delete(self, entity_id: str) -> bool:
        ...

    def find_or_raise(self, entity_id: str) -> T:
        result = self.find_by_id(entity_id)
        if result is None:
            raise KeyError(f"Entity {entity_id!r} not found")
        return result


class InMemoryUserRepository(Repository[User]):
    def __init__(self) -> None:
        self._store: dict[str, User] = {}

    def find_by_id(self, user_id: str) -> Optional[User]:
        return self._store.get(user_id)

    def find_all(self) -> list[User]:
        return list(self._store.values())

    def find_by_status(self, status: Status) -> list[User]:
        return [u for u in self._store.values() if u.status == status]

    @log_call
    def save(self, user: User) -> User:
        self._store[user.id] = user
        return user

    def delete(self, user_id: str) -> bool:
        return bool(self._store.pop(user_id, None))

    def __len__(self) -> int:
        return len(self._store)

    def __iter__(self) -> Iterator[User]:
        return iter(self._store.values())

    def __contains__(self, user_id: str) -> bool:
        return user_id in self._store


# ─── Async service ────────────────────────────────────────────────────────────
class UserService:
    """Async user service with retry logic."""

    def __init__(self, repo: InMemoryUserRepository) -> None:
        self._repo = repo
        self._banned_domains: set[str] = {"spam.com", "trash.io", "fake.net"}

    async def create_user(self, name: str, email: str, role: str = "user") -> User:
        """Create a new user with validation."""
        domain = email.split("@")[-1].lower()
        if domain in self._banned_domains:
            raise PermissionError(f"Domain {domain!r} is not allowed")

        user = User(name=name, email=email, role=role)
        return self._repo.save(user)

    @retry(max_attempts=MAX_RETRIES, delay=0.1)
    async def fetch_user_profile(self, user_id: str) -> dict[str, Any]:
        """Simulate fetching from external API with retry."""
        user = self._repo.find_by_id(user_id)
        if user is None:
            raise KeyError(f"User {user_id!r} not found")
        return user.to_dict()

    async def process_batch(self, user_ids: list[str]) -> list[dict[str, Any]]:
        """Process users concurrently."""
        tasks = [self.fetch_user_profile(uid) for uid in user_ids]
        results = await asyncio.gather(*tasks, return_exceptions=True)
        return [
            r if not isinstance(r, Exception) else {"error": str(r)}
            for r in results
        ]


# ─── Generators ───────────────────────────────────────────────────────────────
def fibonacci() -> Generator[int, None, None]:
    """Infinite Fibonacci sequence generator."""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b


def sliding_window(seq: list[T], size: int) -> Generator[list[T], None, None]:
    """Yield sliding windows of a sequence."""
    for i in range(len(seq) - size + 1):
        yield seq[i : i + size]


async def async_paginate(
    items: list[T],
    page_size: int = 10,
) -> Generator[list[T], None, None]:
    """Async-compatible paginator."""
    for i in range(0, len(items), page_size):
        await asyncio.sleep(0)  # yield control
        yield items[i : i + page_size]  # type: ignore[misc]


# ─── Comprehensions and functional patterns ───────────────────────────────────
def analyze_palette(palette: dict[str, str]) -> dict[str, Any]:
    """Analyze the SONDER palette using functional patterns."""
    colors = [
        Color(hex=v, name=k, japanese="", romanji=k)
        for k, v in palette.items()
    ]

    bg = Color(hex="#0D0D1A", name="bg", japanese="", romanji="bg")

    return {
        "colors": [c.hex for c in colors],
        "luminances": {c.name: round(c.luminance, 4) for c in colors},
        "contrasts_vs_bg": {
            c.name: round(c.contrast_against(bg), 2)
            for c in colors
        },
        "passes_aa": {
            c.name: c.contrast_against(bg) >= 4.5
            for c in colors
        },
        "rgb_values": {c.name: c.rgb for c in colors},
        "sorted_by_luminance": sorted(
            [c.name for c in colors],
            key=lambda n: next(c.luminance for c in colors if c.name == n),
        ),
    }


# ─── Context manager ─────────────────────────────────────────────────────────
class Timer:
    """Context manager for timing code blocks."""

    def __init__(self, label: str = "Block") -> None:
        self.label = label
        self.elapsed: float = 0.0

    def __enter__(self) -> Timer:
        self._start = time.perf_counter()
        return self

    def __exit__(self, *_: Any) -> None:
        self.elapsed = time.perf_counter() - self._start
        print(f"[Timer] {self.label}: {self.elapsed * 1000:.2f}ms")


# ─── Overloads ────────────────────────────────────────────────────────────────
@overload
def stringify(value: int) -> str: ...
@overload
def stringify(value: float) -> str: ...
@overload
def stringify(value: bool) -> str: ...


def stringify(value: Union[int, float, bool]) -> str:
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, int):
        return f"int:{value}"
    return f"float:{value:.4f}"


# ─── Main ────────────────────────────────────────────────────────────────────
async def main() -> None:
    print("SONDER — Python Test\n")

    # Palette analysis
    with Timer("Palette analysis"):
        analysis = analyze_palette(PALETTE)
    print(f"Palette analysis: {analysis['passes_aa']}\n")

    # Repository + service
    repo = InMemoryUserRepository()
    service = UserService(repo)

    # Create users
    users = [
        await service.create_user("Sonder", "dev@sonder.design", "admin"),
        await service.create_user("Nocturne", "nocturne@sonder.design", "user"),
        await service.create_user("Abyss", "abyss@sonder.design", "user"),
    ]

    for user in users:
        print(f"  Created: {user}")

    # Batch fetch
    ids = [u.id for u in users]
    batch = await service.process_batch(ids)
    print(f"\nBatch results: {len(batch)} users fetched")

    # Generator usage
    fib = fibonacci()
    first_ten = [next(fib) for _ in range(10)]
    print(f"\nFibonacci: {first_ten}")

    # Comprehensions
    squares = {n: n**2 for n in range(1, 11)}
    evens = [n for n in range(20) if n % 2 == 0]
    flat = [x for row in [[1, 2], [3, 4], [5, 6]] for x in row]

    # Lambda and higher-order functions
    multiply = lambda x, y: x * y  # noqa: E731
    double = functools.partial(multiply, y=2)
    doubled = list(map(double, range(5)))

    # f-strings (various forms)
    name = "世界"
    pi = 3.14159265
    msg_basic = f"Hello, {name}!"
    msg_expr = f"2 + 2 = {2 + 2}"
    msg_format = f"Pi ≈ {pi:.4f}"
    msg_nested = f"{'upper'.upper()!r}"
    msg_multiline = (
        f"User count: {len(repo)}\n"
        f"Squares: {squares}\n"
        f"Evens:   {evens}"
    )

    print(f"\n{msg_basic}")
    print(msg_expr)
    print(msg_format)
    print(msg_nested)
    print(msg_multiline)
    print(f"Doubled: {doubled}")
    print(f"Flat: {flat}")

    # Exception handling
    try:
        bad_user = await service.create_user("X", "bad@spam.com")
        _ = bad_user
    except PermissionError as e:
        print(f"\nExpected error: {e}")
    except ValueError as e:
        print(f"Validation error: {e}")
    else:
        print("No error (unexpected)")
    finally:
        print("Cleanup complete.")

    # Path operations
    config_path = Path.home() / ".config" / "sonder" / "settings.json"
    print(f"\nConfig path: {config_path}")
    print(f"Exists: {config_path.exists()}")

    print("\n完 — Done.")


if __name__ == "__main__":
    asyncio.run(main())

