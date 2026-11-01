/**
 * SONDER Semantic Palette System
 * Single source of truth for the 11 theme families across Dark and Light variants.
 * 
 * Hierarchy Contract:
 * Dark:
 *   palette.darkest  -> editor.background
 *   palette.deep     -> sideBar.background
 *   palette.surface  -> panel.background & statusBar.background
 * 
 * Light:
 *   palette.lightest -> editor.background
 *   palette.surface  -> sideBar.background
 *   palette.deep     -> panel.background & statusBar.background
 */

const PALETTE_DEFINITIONS = [
  {
    id: 'abyss',
    name: 'Abyss',
    tagline: 'Deep, atmospheric, restrained, and focused.',
    dark: {
      palette: {
        darkest:  '#051017', // Primary Editor
        deep:     '#0A1C27', // Sidebar
        surface:  '#102634', // Panel / Status Bar
        mid:      '#1E3F54', // Borders & separators
        primary:  '#88B7C7', // Secondary text & types
        lightest: '#DCE9ED'  // Primary editor text
      },
      accent: '#52C5D6',
      accentSecondary: '#4E9AB5',
      syntax: {
        kw:    '#52C5D6',
        fn:    '#7FD1DF',
        str:   '#98D9B6',
        num:   '#F0A868',
        type:  '#88B7C7',
        var:   '#DCE9ED',
        const: '#F0A868',
        prop:  '#DCE9ED',
        comm:  '#628CA0',
        op:    '#7FD1DF',
        tag:   '#52C5D6',
        attr:  '#7FD1DF'
      },
      terminal: {
        black:   '#0A1C27',
        red:     '#F87171',
        green:   '#4ADE80',
        yellow:  '#FBBF24',
        blue:    '#52C5D6',
        magenta: '#C084FC',
        cyan:    '#38BDF8',
        white:   '#DCE9ED'
      }
    },
    light: {
      palette: {
        lightest: '#FFFFFF', // Primary Editor
        surface:  '#F1F5F8', // Sidebar
        deep:     '#E3ECF1', // Panel / Status Bar
        mid:      '#C6D7E1', // Borders & separators
        primary:  '#23495D', // Secondary text & types
        darkest:  '#0B1E29'  // Primary editor text
      },
      accent: '#0A7D92',
      accentSecondary: '#1B647A',
      syntax: {
        kw:    '#0A7D92',
        fn:    '#1B647A',
        str:   '#1E6E45',
        num:   '#A35417',
        type:  '#23495D',
        var:   '#0B1E29',
        const: '#A35417',
        prop:  '#0B1E29',
        comm:  '#5C7887',
        op:    '#1B647A',
        tag:   '#0A7D92',
        attr:  '#1B647A'
      },
      terminal: {
        black:   '#0B1E29',
        red:     '#B91C1C',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#0369A1',
        magenta: '#7E22CE',
        cyan:    '#0E7490',
        white:   '#475569'
      }
    }
  },
  {
    id: 'nocturne',
    name: 'Nocturne',
    tagline: 'Rich, mysterious, elegant, and contemplative.',
    dark: {
      palette: {
        darkest:  '#0A0914', // Primary Editor
        deep:     '#121024', // Sidebar
        surface:  '#1A1733', // Panel / Status Bar
        mid:      '#2E2954', // Borders & separators
        primary:  '#C4A5E8', // Secondary text & types
        lightest: '#F2EDFB'  // Primary editor text
      },
      accent: '#B37DD3',
      accentSecondary: '#E879F9',
      syntax: {
        kw:    '#F472B6',
        fn:    '#B37DD3',
        str:   '#E9D8A6',
        num:   '#FBBF24',
        type:  '#C4A5E8',
        var:   '#F2EDFB',
        const: '#FBBF24',
        prop:  '#F2EDFB',
        comm:  '#8177AB',
        op:    '#E879F9',
        tag:   '#F472B6',
        attr:  '#B37DD3'
      },
      terminal: {
        black:   '#121024',
        red:     '#FB7185',
        green:   '#4ADE80',
        yellow:  '#FBBF24',
        blue:    '#B37DD3',
        magenta: '#E879F9',
        cyan:    '#67E8F9',
        white:   '#F2EDFB'
      }
    },
    light: {
      palette: {
        lightest: '#FFFFFF', // Primary Editor
        surface:  '#F5F3FA', // Sidebar
        deep:     '#EBE6F5', // Panel / Status Bar
        mid:      '#D4C8EB', // Borders & separators
        primary:  '#4D297A', // Secondary text & types
        darkest:  '#1B1231'  // Primary editor text
      },
      accent: '#7E22CE',
      accentSecondary: '#A21CAF',
      syntax: {
        kw:    '#A21CAF',
        fn:    '#7E22CE',
        str:   '#854D0E',
        num:   '#B45309',
        type:  '#4D297A',
        var:   '#1B1231',
        const: '#B45309',
        prop:  '#1B1231',
        comm:  '#7C6E97',
        op:    '#6B21A8',
        tag:   '#A21CAF',
        attr:  '#7E22CE'
      },
      terminal: {
        black:   '#1B1231',
        red:     '#9F1239',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#581C87',
        magenta: '#86198F',
        cyan:    '#0E7490',
        white:   '#475569'
      }
    }
  },
  {
    id: 'sakura',
    name: 'Sakura',
    tagline: 'Soft, delicate, airy, and calming.',
    dark: {
      palette: {
        darkest:  '#120E12', // Primary Editor
        deep:     '#1A141A', // Sidebar
        surface:  '#251C26', // Panel / Status Bar
        mid:      '#443245', // Borders & separators
        primary:  '#F4A4AF', // Secondary text & types
        lightest: '#FDF0F3'  // Primary editor text
      },
      accent: '#FB7185',
      accentSecondary: '#FDA4AF',
      syntax: {
        kw:    '#FB7185',
        fn:    '#FDA4AF',
        str:   '#CBD5E1',
        num:   '#FED7AA',
        type:  '#F4A4AF',
        var:   '#FDF0F3',
        const: '#FED7AA',
        prop:  '#FDF0F3',
        comm:  '#947B93',
        op:    '#FB7185',
        tag:   '#FB7185',
        attr:  '#FDA4AF'
      },
      terminal: {
        black:   '#1A141A',
        red:     '#FB7185',
        green:   '#4ADE80',
        yellow:  '#FCD34D',
        blue:    '#FDA4AF',
        magenta: '#F472B6',
        cyan:    '#67E8F9',
        white:   '#FDF0F3'
      }
    },
    light: {
      palette: {
        lightest: '#FFFFFF', // Primary Editor
        surface:  '#FDF5F6', // Sidebar
        deep:     '#F8E9EB', // Panel / Status Bar
        mid:      '#E9CAD0', // Borders & separators
        primary:  '#6E2838', // Secondary text & types
        darkest:  '#241217'  // Primary editor text
      },
      accent: '#BE123C',
      accentSecondary: '#9F1239',
      syntax: {
        kw:    '#BE123C',
        fn:    '#9F1239',
        str:   '#285E43',
        num:   '#A14E15',
        type:  '#6E2838',
        var:   '#241217',
        const: '#A14E15',
        prop:  '#241217',
        comm:  '#8A6B73',
        op:    '#BE123C',
        tag:   '#BE123C',
        attr:  '#9F1239'
      },
      terminal: {
        black:   '#241217',
        red:     '#9F1239',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#9F1239',
        magenta: '#831843',
        cyan:    '#0E7490',
        white:   '#475569'
      }
    }
  },
  {
    id: 'umber',
    name: 'Umber',
    tagline: 'Warm, earthy, natural, and grounded.',
    dark: {
      palette: {
        darkest:  '#120E0B', // Primary Editor
        deep:     '#1C1510', // Sidebar
        surface:  '#271E18', // Panel / Status Bar
        mid:      '#47372D', // Borders & separators
        primary:  '#D4A373', // Secondary text & types
        lightest: '#FDF8F3'  // Primary editor text
      },
      accent: '#E07A5F',
      accentSecondary: '#E9C46A',
      syntax: {
        kw:    '#E07A5F',
        fn:    '#E9C46A',
        str:   '#A7C957',
        num:   '#F4A261',
        type:  '#D4A373',
        var:   '#FDF8F3',
        const: '#F4A261',
        prop:  '#FDF8F3',
        comm:  '#967D6F',
        op:    '#E07A5F',
        tag:   '#E07A5F',
        attr:  '#E9C46A'
      },
      terminal: {
        black:   '#1C1510',
        red:     '#E76F51',
        green:   '#A7C957',
        yellow:  '#E9C46A',
        blue:    '#E07A5F',
        magenta: '#DDA15E',
        cyan:    '#8AB17D',
        white:   '#FDF8F3'
      }
    },
    light: {
      palette: {
        lightest: '#FFFFFF', // Primary Editor
        surface:  '#FAF6F0', // Sidebar
        deep:     '#F2EAE0', // Panel / Status Bar
        mid:      '#DFCFC1', // Borders & separators
        primary:  '#634027', // Secondary text & types
        darkest:  '#26180E'  // Primary editor text
      },
      accent: '#A74B2A',
      accentSecondary: '#8B4513',
      syntax: {
        kw:    '#A74B2A',
        fn:    '#8B4513',
        str:   '#386641',
        num:   '#B25E1B',
        type:  '#634027',
        var:   '#26180E',
        const: '#B25E1B',
        prop:  '#26180E',
        comm:  '#806A58',
        op:    '#A74B2A',
        tag:   '#A74B2A',
        attr:  '#8B4513'
      },
      terminal: {
        black:   '#26180E',
        red:     '#9A3412',
        green:   '#166534',
        yellow:  '#854D0E',
        blue:    '#78350F',
        magenta: '#701A75',
        cyan:    '#0E7490',
        white:   '#475569'
      }
    }
  },
  {
    id: 'midnight',
    name: 'Midnight',
    tagline: 'Deep, cinematic, precise, and nocturnal.',
    dark: {
      palette: {
        darkest:  '#060A13', // Primary Editor
        deep:     '#0C1224', // Sidebar
        surface:  '#131B34', // Panel / Status Bar
        mid:      '#222E54', // Borders & separators
        primary:  '#85B5F2', // Secondary text & types
        lightest: '#EBF2FA'  // Primary editor text
      },
      accent: '#38BDF8',
      accentSecondary: '#818CF8',
      syntax: {
        kw:    '#818CF8',
        fn:    '#38BDF8',
        str:   '#86EFAC',
        num:   '#FDBA74',
        type:  '#85B5F2',
        var:   '#EBF2FA',
        const: '#FDBA74',
        prop:  '#EBF2FA',
        comm:  '#6C7EAB',
        op:    '#38BDF8',
        tag:   '#818CF8',
        attr:  '#38BDF8'
      },
      terminal: {
        black:   '#0C1224',
        red:     '#F87171',
        green:   '#4ADE80',
        yellow:  '#FBBF24',
        blue:    '#38BDF8',
        magenta: '#818CF8',
        cyan:    '#67E8F9',
        white:   '#EBF2FA'
      }
    },
    light: {
      palette: {
        lightest: '#FFFFFF', // Primary Editor
        surface:  '#F2F5F9', // Sidebar
        deep:     '#E4EBF4', // Panel / Status Bar
        mid:      '#C6D4E5', // Borders & separators
        primary:  '#1E3A8A', // Secondary text & types
        darkest:  '#0A142F'  // Primary editor text
      },
      accent: '#0284C7',
      accentSecondary: '#2563EB',
      syntax: {
        kw:    '#2563EB',
        fn:    '#0369A1',
        str:   '#15803D',
        num:   '#C2410C',
        type:  '#1E3A8A',
        var:   '#0A142F',
        const: '#C2410C',
        prop:  '#0A142F',
        comm:  '#5B6E8C',
        op:    '#0369A1',
        tag:   '#2563EB',
        attr:  '#0369A1'
      },
      terminal: {
        black:   '#0A142F',
        red:     '#991B1B',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#1E40AF',
        magenta: '#6B21A8',
        cyan:    '#0E7490',
        white:   '#475569'
      }
    }
  },
  {
    id: 'forest',
    name: 'Forest',
    tagline: 'Organic, quiet, grounded, and refreshing.',
    dark: {
      palette: {
        darkest:  '#08120C', // Primary Editor
        deep:     '#0E1C14', // Sidebar
        surface:  '#16281D', // Panel / Status Bar
        mid:      '#284432', // Borders & separators
        primary:  '#88CDA0', // Secondary text & types
        lightest: '#EDF7F1'  // Primary editor text
      },
      accent: '#4ADE80',
      accentSecondary: '#2DD4BF',
      syntax: {
        kw:    '#2DD4BF',
        fn:    '#4ADE80',
        str:   '#D9F99D',
        num:   '#FCD34D',
        type:  '#88CDA0',
        var:   '#EDF7F1',
        const: '#FCD34D',
        prop:  '#EDF7F1',
        comm:  '#6C8D79',
        op:    '#4ADE80',
        tag:   '#2DD4BF',
        attr:  '#4ADE80'
      },
      terminal: {
        black:   '#0E1C14',
        red:     '#FB7185',
        green:   '#4ADE80',
        yellow:  '#FCD34D',
        blue:    '#2DD4BF',
        magenta: '#A78BFA',
        cyan:    '#67E8F9',
        white:   '#EDF7F1'
      }
    },
    light: {
      palette: {
        lightest: '#FFFFFF', // Primary Editor
        surface:  '#F2F7F4', // Sidebar
        deep:     '#E4EFE8', // Panel / Status Bar
        mid:      '#C3D8CB', // Borders & separators
        primary:  '#166534', // Secondary text & types
        darkest:  '#0B2514'  // Primary editor text
      },
      accent: '#15803D',
      accentSecondary: '#0F766E',
      syntax: {
        kw:    '#0F766E',
        fn:    '#15803D',
        str:   '#4D7C0F',
        num:   '#B45309',
        type:  '#166534',
        var:   '#0B2514',
        const: '#B45309',
        prop:  '#0B2514',
        comm:  '#587564',
        op:    '#15803D',
        tag:   '#0F766E',
        attr:  '#15803D'
      },
      terminal: {
        black:   '#0B2514',
        red:     '#991B1B',
        green:   '#166534',
        yellow:  '#854D0E',
        blue:    '#115E59',
        magenta: '#701A75',
        cyan:    '#0E7490',
        white:   '#475569'
      }
    }
  },
  {
    id: 'nebula',
    name: 'Nebula',
    tagline: 'Atmospheric, imaginative, and futuristic.',
    dark: {
      palette: {
        darkest:  '#0B0716', // Primary Editor
        deep:     '#130D25', // Sidebar
        surface:  '#1C1336', // Panel / Status Bar
        mid:      '#372562', // Borders & separators
        primary:  '#C58AFE', // Secondary text & types
        lightest: '#F6EEFF'  // Primary editor text
      },
      accent: '#E879F9',
      accentSecondary: '#818CF8',
      syntax: {
        kw:    '#E879F9',
        fn:    '#A78BFA',
        str:   '#FBCFE8',
        num:   '#FDBA74',
        type:  '#C58AFE',
        var:   '#F6EEFF',
        const: '#FDBA74',
        prop:  '#F6EEFF',
        comm:  '#8971B0',
        op:    '#E879F9',
        tag:   '#E879F9',
        attr:  '#A78BFA'
      },
      terminal: {
        black:   '#130D25',
        red:     '#F43F5E',
        green:   '#34D399',
        yellow:  '#FBBF24',
        blue:    '#818CF8',
        magenta: '#E879F9',
        cyan:    '#67E8F9',
        white:   '#F6EEFF'
      }
    },
    light: {
      palette: {
        lightest: '#FFFFFF', // Primary Editor
        surface:  '#F7F3FC', // Sidebar
        deep:     '#EFE8F9', // Panel / Status Bar
        mid:      '#D6C5F0', // Borders & separators
        primary:  '#581C87', // Secondary text & types
        darkest:  '#1E0A3C'  // Primary editor text
      },
      accent: '#9333EA',
      accentSecondary: '#7C3AED',
      syntax: {
        kw:    '#9333EA',
        fn:    '#7C3AED',
        str:   '#9D174D',
        num:   '#C2410C',
        type:  '#581C87',
        var:   '#1E0A3C',
        const: '#C2410C',
        prop:  '#1E0A3C',
        comm:  '#7D669C',
        op:    '#9333EA',
        tag:   '#9333EA',
        attr:  '#7C3AED'
      },
      terminal: {
        black:   '#1E0A3C',
        red:     '#9F1239',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#581C87',
        magenta: '#86198F',
        cyan:    '#0E7490',
        white:   '#475569'
      }
    }
  },
  {
    id: 'ocean',
    name: 'Ocean',
    tagline: 'Clear, cool, modern, and expansive.',
    dark: {
      palette: {
        darkest:  '#05121D', // Primary Editor
        deep:     '#0A1C2B', // Sidebar
        surface:  '#10283D', // Panel / Status Bar
        mid:      '#1D4262', // Borders & separators
        primary:  '#60C5F8', // Secondary text & types
        lightest: '#EBF5FA'  // Primary editor text
      },
      accent: '#22D3EE',
      accentSecondary: '#38BDF8',
      syntax: {
        kw:    '#38BDF8',
        fn:    '#22D3EE',
        str:   '#A5F3FC',
        num:   '#FDBA74',
        type:  '#60C5F8',
        var:   '#EBF5FA',
        const: '#FDBA74',
        prop:  '#EBF5FA',
        comm:  '#5C87AC',
        op:    '#22D3EE',
        tag:   '#38BDF8',
        attr:  '#22D3EE'
      },
      terminal: {
        black:   '#0A1C2B',
        red:     '#F87171',
        green:   '#34D399',
        yellow:  '#FBBF24',
        blue:    '#38BDF8',
        magenta: '#818CF8',
        cyan:    '#22D3EE',
        white:   '#EBF5FA'
      }
    },
    light: {
      palette: {
        lightest: '#FFFFFF', // Primary Editor
        surface:  '#F0F6FA', // Sidebar
        deep:     '#E2EFF6', // Panel / Status Bar
        mid:      '#BFDCEB', // Borders & separators
        primary:  '#0369A1', // Secondary text & types
        darkest:  '#06253B'  // Primary editor text
      },
      accent: '#0284C7',
      accentSecondary: '#0891B2',
      syntax: {
        kw:    '#0369A1',
        fn:    '#0E7490',
        str:   '#0F766E',
        num:   '#C2410C',
        type:  '#0369A1',
        var:   '#06253B',
        const: '#C2410C',
        prop:  '#06253B',
        comm:  '#537B96',
        op:    '#0369A1',
        tag:   '#0369A1',
        attr:  '#0E7490'
      },
      terminal: {
        black:   '#06253B',
        red:     '#991B1B',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#075985',
        magenta: '#701A75',
        cyan:    '#0E7490',
        white:   '#475569'
      }
    }
  },
  {
    id: 'ember',
    name: 'Ember',
    tagline: 'Warm, energetic, bold, and focused.',
    dark: {
      palette: {
        darkest:  '#140A07', // Primary Editor
        deep:     '#1C0F0A', // Sidebar
        surface:  '#271610', // Panel / Status Bar
        mid:      '#48281C', // Borders & separators
        primary:  '#FDBA74', // Secondary text & types
        lightest: '#FFF3ED'  // Primary editor text
      },
      accent: '#F97316',
      accentSecondary: '#FBBF24',
      syntax: {
        kw:    '#F97316',
        fn:    '#FBBF24',
        str:   '#FED7AA',
        num:   '#FB7185',
        type:  '#FDBA74',
        var:   '#FFF3ED',
        const: '#FB7185',
        prop:  '#FFF3ED',
        comm:  '#9B7365',
        op:    '#F97316',
        tag:   '#F97316',
        attr:  '#FBBF24'
      },
      terminal: {
        black:   '#1C0F0A',
        red:     '#EF4444',
        green:   '#84CC16',
        yellow:  '#FBBF24',
        blue:    '#F97316',
        magenta: '#F43F5E',
        cyan:    '#38BDF8',
        white:   '#FFF3ED'
      }
    },
    light: {
      palette: {
        lightest: '#FFFFFF', // Primary Editor
        surface:  '#FCF6F2', // Sidebar
        deep:     '#F7ECE4', // Panel / Status Bar
        mid:      '#E8D2C2', // Borders & separators
        primary:  '#9A3412', // Secondary text & types
        darkest:  '#2E1208'  // Primary editor text
      },
      accent: '#EA580C',
      accentSecondary: '#C2410C',
      syntax: {
        kw:    '#C2410C',
        fn:    '#C2410C',
        str:   '#2D6A4F',
        num:   '#B91C1C',
        type:  '#9A3412',
        var:   '#2E1208',
        const: '#B91C1C',
        prop:  '#2E1208',
        comm:  '#87685D',
        op:    '#C2410C',
        tag:   '#C2410C',
        attr:  '#C2410C'
      },
      terminal: {
        black:   '#2E1208',
        red:     '#9A3412',
        green:   '#166534',
        yellow:  '#854D0E',
        blue:    '#9A3412',
        magenta: '#831843',
        cyan:    '#0E7490',
        white:   '#475569'
      }
    }
  },
  {
    id: 'lavender',
    name: 'Lavender',
    tagline: 'Elegant, gentle, creative, and soothing.',
    dark: {
      palette: {
        darkest:  '#0C081A', // Primary Editor
        deep:     '#130D29', // Sidebar
        surface:  '#1B1339', // Panel / Status Bar
        mid:      '#322366', // Borders & separators
        primary:  '#C9BAFE', // Secondary text & types
        lightest: '#F6F3FE'  // Primary editor text
      },
      accent: '#A78BFA',
      accentSecondary: '#DDD6FE',
      syntax: {
        kw:    '#C084FC',
        fn:    '#A78BFA',
        str:   '#E9D5FF',
        num:   '#F472B6',
        type:  '#C9BAFE',
        var:   '#F6F3FE',
        const: '#F472B6',
        prop:  '#F6F3FE',
        comm:  '#8373B0',
        op:    '#A78BFA',
        tag:   '#C084FC',
        attr:  '#A78BFA'
      },
      terminal: {
        black:   '#130D29',
        red:     '#FB7185',
        green:   '#34D399',
        yellow:  '#FBBF24',
        blue:    '#A78BFA',
        magenta: '#C084FC',
        cyan:    '#67E8F9',
        white:   '#F6F3FE'
      }
    },
    light: {
      palette: {
        lightest: '#FFFFFF', // Primary Editor
        surface:  '#F6F4FB', // Sidebar
        deep:     '#EEE9F7', // Panel / Status Bar
        mid:      '#D4C9EB', // Borders & separators
        primary:  '#5B21B6', // Secondary text & types
        darkest:  '#1D0B38'  // Primary editor text
      },
      accent: '#7C3AED',
      accentSecondary: '#6D28D9',
      syntax: {
        kw:    '#7C3AED',
        fn:    '#6D28D9',
        str:   '#1E6E56',
        num:   '#9D174D',
        type:  '#5B21B6',
        var:   '#1D0B38',
        const: '#9D174D',
        prop:  '#1D0B38',
        comm:  '#7A6A9B',
        op:    '#7C3AED',
        tag:   '#7C3AED',
        attr:  '#6D28D9'
      },
      terminal: {
        black:   '#1D0B38',
        red:     '#9F1239',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#5B21B6',
        magenta: '#86198F',
        cyan:    '#0E7490',
        white:   '#475569'
      }
    }
  },
  {
    id: 'blossom',
    name: 'Blossom',
    tagline: 'Vibrant, floral, playful, and harmonious.',
    dark: {
      palette: {
        darkest:  '#130810', // Primary Editor
        deep:     '#1C0D18', // Sidebar
        surface:  '#271322', // Panel / Status Bar
        mid:      '#4A203F', // Borders & separators
        primary:  '#F9A8D4', // Secondary text & types
        lightest: '#FDF2F7'  // Primary editor text
      },
      accent: '#EC4899',
      accentSecondary: '#F43F5E',
      syntax: {
        kw:    '#EC4899',
        fn:    '#F472B6',
        str:   '#FBCFE8',
        num:   '#FBBF24',
        type:  '#F9A8D4',
        var:   '#FDF2F7',
        const: '#FBBF24',
        prop:  '#FDF2F7',
        comm:  '#997090',
        op:    '#EC4899',
        tag:   '#EC4899',
        attr:  '#F472B6'
      },
      terminal: {
        black:   '#1C0D18',
        red:     '#F43F5E',
        green:   '#34D399',
        yellow:  '#FBBF24',
        blue:    '#EC4899',
        magenta: '#F472B6',
        cyan:    '#67E8F9',
        white:   '#FDF2F7'
      }
    },
    light: {
      palette: {
        lightest: '#FFFFFF', // Primary Editor
        surface:  '#FDF4F8', // Sidebar
        deep:     '#F8E7F0', // Panel / Status Bar
        mid:      '#EBC8DD', // Borders & separators
        primary:  '#831843', // Secondary text & types
        darkest:  '#2C081E'  // Primary editor text
      },
      accent: '#DB2777',
      accentSecondary: '#BE185D',
      syntax: {
        kw:    '#DB2777',
        fn:    '#BE185D',
        str:   '#15803D',
        num:   '#B45309',
        type:  '#831843',
        var:   '#2C081E',
        const: '#B45309',
        prop:  '#2C081E',
        comm:  '#8E6883',
        op:    '#DB2777',
        tag:   '#DB2777',
        attr:  '#BE185D'
      },
      terminal: {
        black:   '#2C081E',
        red:     '#9F1239',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#831843',
        magenta: '#86198F',
        cyan:    '#0E7490',
        white:   '#475569'
      }
    }
  }
];

module.exports = { PALETTE_DEFINITIONS };
