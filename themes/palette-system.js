/**
 * HUEFORM Semantic Palette System
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
        darkest:  '#040D14', // Deep trench blue-black
        deep:     '#081722', // Sidebar
        surface:  '#0E2130', // Panel / Status Bar
        mid:      '#18364B', // Borders & separators
        primary:  '#80A8B8', // Secondary text & types
        lightest: '#D5E4EC'  // Primary editor text
      },
      accent: '#3EAABF',
      accentSecondary: '#5296A8',
      syntax: {
        kw:    '#3EAABF',
        fn:    '#6BBCCF',
        str:   '#7ECEAA',
        num:   '#E59D62',
        type:  '#80A8B8',
        var:   '#D5E4EC',
        const: '#E59D62',
        prop:  '#D5E4EC',
        comm:  '#5A8296',
        op:    '#6BBCCF',
        tag:   '#3EAABF',
        attr:  '#6BBCCF'
      },
      terminal: {
        black:   '#081722',
        red:     '#F87171',
        green:   '#4ADE80',
        yellow:  '#FBBF24',
        blue:    '#3EAABF',
        magenta: '#B89FD6',
        cyan:    '#38BDF8',
        white:   '#D5E4EC'
      }
    },
    light: {
      palette: {
        lightest: '#EFF2F5', // Glacial cool slate paper
        surface:  '#DFE5EB', // Sidebar
        deep:     '#CFD8E1', // Panel / Status Bar
        mid:      '#B6CAD6', // Borders & separators
        primary:  '#234E6B', // Secondary text & types
        darkest:  '#071720'  // Primary editor text
      },
      accent: '#0C606E',
      accentSecondary: '#135A7A',
      syntax: {
        kw:    '#0C606E',
        fn:    '#135A7A',
        str:   '#156644',
        num:   '#92400E',
        type:  '#234E6B',
        var:   '#071720',
        const: '#92400E',
        prop:  '#071720',
        comm:  '#526E7D',
        op:    '#135A7A',
        tag:   '#0C606E',
        attr:  '#135A7A'
      },
      terminal: {
        black:   '#071720',
        red:     '#B91C1C',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#0C606E',
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
        darkest:  '#0A0912', // Smoky blackberry near-black
        deep:     '#121020', // Sidebar
        surface:  '#19172A', // Panel / Status Bar
        mid:      '#2B2745', // Borders & separators
        primary:  '#B89FD6', // Secondary text & types
        lightest: '#EFEBF7'  // Primary editor text
      },
      accent: '#A77DC8',
      accentSecondary: '#C88EE0',
      syntax: {
        kw:    '#D47FA6',
        fn:    '#A77DC8',
        str:   '#E0CCA0',
        num:   '#DEAC62',
        type:  '#B89FD6',
        var:   '#EFEBF7',
        const: '#DEAC62',
        prop:  '#EFEBF7',
        comm:  '#8177A1',
        op:    '#BA8BD9',
        tag:   '#D47FA6',
        attr:  '#A77DC8'
      },
      terminal: {
        black:   '#121020',
        red:     '#FB7185',
        green:   '#4ADE80',
        yellow:  '#FBBF24',
        blue:    '#A77DC8',
        magenta: '#C88EE0',
        cyan:    '#67E8F9',
        white:   '#EFEBF7'
      }
    },
    light: {
      palette: {
        lightest: '#F6F5F9', // Dusk mist paper
        surface:  '#EDEAF3', // Sidebar
        deep:     '#E2DEEC', // Panel / Status Bar
        mid:      '#CAC2DD', // Borders & separators
        primary:  '#4F3574', // Secondary text & types
        darkest:  '#1A132B'  // Primary editor text
      },
      accent: '#6F26B8',
      accentSecondary: '#8C279E',
      syntax: {
        kw:    '#8F2060',
        fn:    '#6F26B8',
        str:   '#73531A',
        num:   '#A34F0C',
        type:  '#4F3574',
        var:   '#1A132B',
        const: '#A34F0C',
        prop:  '#1A132B',
        comm:  '#6B5E87',
        op:    '#5E1F9E',
        tag:   '#8F2060',
        attr:  '#6F26B8'
      },
      terminal: {
        black:   '#1A132B',
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
        darkest:  '#130E12', // Dark rosewood charcoal
        deep:     '#1D151C', // Sidebar
        surface:  '#271C26', // Panel / Status Bar
        mid:      '#463243', // Borders & separators
        primary:  '#E8A2B0', // Secondary text & types
        lightest: '#FBF0F3'  // Primary editor text
      },
      accent: '#F4728B',
      accentSecondary: '#F9A8B6',
      syntax: {
        kw:    '#F4728B',
        fn:    '#EE8BA4',
        str:   '#C2D6A4',
        num:   '#F2B880',
        type:  '#E8A2B0',
        var:   '#FBF0F3',
        const: '#F2B880',
        prop:  '#FBF0F3',
        comm:  '#8F7388',
        op:    '#F4728B',
        tag:   '#F4728B',
        attr:  '#EE8BA4'
      },
      terminal: {
        black:   '#1D151C',
        red:     '#F4728B',
        green:   '#4ADE80',
        yellow:  '#FCD34D',
        blue:    '#F9A8B6',
        magenta: '#EE8BA4',
        cyan:    '#67E8F9',
        white:   '#FBF0F3'
      }
    },
    light: {
      palette: {
        lightest: '#FAF5F6', // Rose-porcelain paper
        surface:  '#F4E9EC', // Sidebar
        deep:     '#EADBDF', // Panel / Status Bar
        mid:      '#D8BCC4', // Borders & separators
        primary:  '#70273B', // Secondary text & types
        darkest:  '#261219'  // Primary editor text
      },
      accent: '#B81B42',
      accentSecondary: '#981434',
      syntax: {
        kw:    '#B81B42',
        fn:    '#981434',
        str:   '#2A663E',
        num:   '#A35018',
        type:  '#70273B',
        var:   '#261219',
        const: '#A35018',
        prop:  '#261219',
        comm:  '#7D5C66',
        op:    '#B81B42',
        tag:   '#B81B42',
        attr:  '#981434'
      },
      terminal: {
        black:   '#261219',
        red:     '#981434',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#981434',
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
        darkest:  '#130F0B', // Rich espresso earth
        deep:     '#1D1611', // Sidebar
        surface:  '#271F18', // Panel / Status Bar
        mid:      '#46382C', // Borders & separators
        primary:  '#D4A274', // Secondary text & types
        lightest: '#FAF3EC'  // Primary editor text
      },
      accent: '#DE7456',
      accentSecondary: '#E5B860',
      syntax: {
        kw:    '#DE7456',
        fn:    '#E5B860',
        str:   '#A3C660',
        num:   '#EFA058',
        type:  '#D4A274',
        var:   '#FAF3EC',
        const: '#EFA058',
        prop:  '#FAF3EC',
        comm:  '#8E7766',
        op:    '#DE7456',
        tag:   '#DE7456',
        attr:  '#E5B860'
      },
      terminal: {
        black:   '#1D1611',
        red:     '#E76F51',
        green:   '#A3C660',
        yellow:  '#E5B860',
        blue:    '#DE7456',
        magenta: '#DDA15E',
        cyan:    '#8AB17D',
        white:   '#FAF3EC'
      }
    },
    light: {
      palette: {
        lightest: '#FAF7F2', // Warm parchment alabaster
        surface:  '#F0EAE0', // Sidebar
        deep:     '#E5DCCE', // Panel / Status Bar
        mid:      '#CEC0AF', // Borders & separators
        primary:  '#684124', // Secondary text & types
        darkest:  '#24180E'  // Primary editor text
      },
      accent: '#9E4324',
      accentSecondary: '#8A5714',
      syntax: {
        kw:    '#9E4324',
        fn:    '#8A5714',
        str:   '#3D662B',
        num:   '#AA5515',
        type:  '#684124',
        var:   '#24180E',
        const: '#AA5515',
        prop:  '#24180E',
        comm:  '#75604F',
        op:    '#9E4324',
        tag:   '#9E4324',
        attr:  '#8A5714'
      },
      terminal: {
        black:   '#24180E',
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
        darkest:  '#070B16', // Nocturnal navy-black
        deep:     '#0D1426', // Sidebar
        surface:  '#141E38', // Panel / Status Bar
        mid:      '#23325B', // Borders & separators
        primary:  '#87B4ED', // Secondary text & types
        lightest: '#EBF2FC'  // Primary editor text
      },
      accent: '#38BAF5',
      accentSecondary: '#788AF5',
      syntax: {
        kw:    '#788AF5',
        fn:    '#38BAF5',
        str:   '#6EE7B7',
        num:   '#F5B06B',
        type:  '#87B4ED',
        var:   '#EBF2FC',
        const: '#F5B06B',
        prop:  '#EBF2FC',
        comm:  '#657DAA',
        op:    '#38BAF5',
        tag:   '#788AF5',
        attr:  '#38BAF5'
      },
      terminal: {
        black:   '#0D1426',
        red:     '#F87171',
        green:   '#4ADE80',
        yellow:  '#FBBF24',
        blue:    '#38BAF5',
        magenta: '#788AF5',
        cyan:    '#67E8F9',
        white:   '#EBF2FC'
      }
    },
    light: {
      palette: {
        lightest: '#F3F6FA', // Architectural ice paper
        surface:  '#E5ECF4', // Sidebar
        deep:     '#D6E2EE', // Panel / Status Bar
        mid:      '#B5C8DC', // Borders & separators
        primary:  '#1B4485', // Secondary text & types
        darkest:  '#09162D'  // Primary editor text
      },
      accent: '#1D64D8',
      accentSecondary: '#1E40AF',
      syntax: {
        kw:    '#1D64D8',
        fn:    '#1E40AF',
        str:   '#157F3B',
        num:   '#B84A0E',
        type:  '#1B4485',
        var:   '#09162D',
        const: '#B84A0E',
        prop:  '#09162D',
        comm:  '#526E8F',
        op:    '#1D64D8',
        tag:   '#1D64D8',
        attr:  '#1E40AF'
      },
      terminal: {
        black:   '#09162D',
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
        darkest:  '#07120C', // Deep spruce green-black
        deep:     '#0D1E14', // Sidebar
        surface:  '#142B1D', // Panel / Status Bar
        mid:      '#244932', // Borders & separators
        primary:  '#80C899', // Secondary text & types
        lightest: '#EEF7F2'  // Primary editor text
      },
      accent: '#3DD678',
      accentSecondary: '#29C7B2',
      syntax: {
        kw:    '#29C7B2',
        fn:    '#3DD678',
        str:   '#D2F48D',
        num:   '#F5C74E',
        type:  '#80C899',
        var:   '#EEF7F2',
        const: '#F5C74E',
        prop:  '#EEF7F2',
        comm:  '#638C71',
        op:    '#3DD678',
        tag:   '#29C7B2',
        attr:  '#3DD678'
      },
      terminal: {
        black:   '#0D1E14',
        red:     '#FB7185',
        green:   '#3DD678',
        yellow:  '#F5C74E',
        blue:    '#29C7B2',
        magenta: '#A78BFA',
        cyan:    '#67E8F9',
        white:   '#EEF7F2'
      }
    },
    light: {
      palette: {
        lightest: '#F3F7F4', // Botanical sage-dew paper
        surface:  '#E6EFE9', // Sidebar
        deep:     '#D7E5DC', // Panel / Status Bar
        mid:      '#B5CDC0', // Borders & separators
        primary:  '#155E32', // Secondary text & types
        darkest:  '#0A2413'  // Primary editor text
      },
      accent: '#15803D',
      accentSecondary: '#0D6E66',
      syntax: {
        kw:    '#0D6E66',
        fn:    '#15803D',
        str:   '#4D7C0F',
        num:   '#A8520C',
        type:  '#155E32',
        var:   '#0A2413',
        const: '#A8520C',
        prop:  '#0A2413',
        comm:  '#537460',
        op:    '#15803D',
        tag:   '#0D6E66',
        attr:  '#15803D'
      },
      terminal: {
        black:   '#0A2413',
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
        darkest:  '#0B0618', // Deep cosmic space violet-black
        deep:     '#140C2C', // Sidebar
        surface:  '#1C123D', // Panel / Status Bar
        mid:      '#39246B', // Borders & separators
        primary:  '#CA92FA', // Secondary text & types
        lightest: '#F7EEFF'  // Primary editor text
      },
      accent: '#EE62C8',
      accentSecondary: '#8C7AF7',
      syntax: {
        kw:    '#EE62C8',
        fn:    '#A77BFA',
        str:   '#7DD3FC',
        num:   '#FDBA74',
        type:  '#CA92FA',
        var:   '#F7EEFF',
        const: '#FDBA74',
        prop:  '#F7EEFF',
        comm:  '#8870B1',
        op:    '#EE62C8',
        tag:   '#EE62C8',
        attr:  '#A77BFA'
      },
      terminal: {
        black:   '#140C2C',
        red:     '#F43F5E',
        green:   '#34D399',
        yellow:  '#FBBF24',
        blue:    '#8C7AF7',
        magenta: '#EE62C8',
        cyan:    '#7DD3FC',
        white:   '#F7EEFF'
      }
    },
    light: {
      palette: {
        lightest: '#F7F4FB', // Starlight lilac paper
        surface:  '#EDE5F6', // Sidebar
        deep:     '#DFD2EE', // Panel / Status Bar
        mid:      '#C5AEDB', // Borders & separators
        primary:  '#5E1D96', // Secondary text & types
        darkest:  '#1C0A36'  // Primary editor text
      },
      accent: '#9828C9',
      accentSecondary: '#6D28D9',
      syntax: {
        kw:    '#9828C9',
        fn:    '#6D28D9',
        str:   '#0E7490',
        num:   '#B83E0A',
        type:  '#5E1D96',
        var:   '#1C0A36',
        const: '#B83E0A',
        prop:  '#1C0A36',
        comm:  '#725B8F',
        op:    '#9828C9',
        tag:   '#9828C9',
        attr:  '#6D28D9'
      },
      terminal: {
        black:   '#1C0A36',
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
        darkest:  '#041322', // Marine blue-black
        deep:     '#081F33', // Sidebar
        surface:  '#0E2B45', // Panel / Status Bar
        mid:      '#1A4970', // Borders & separators
        primary:  '#52C2F8', // Secondary text & types
        lightest: '#EBF6FC'  // Primary editor text
      },
      accent: '#14D2E6',
      accentSecondary: '#38BDF8',
      syntax: {
        kw:    '#14D2E6',
        fn:    '#38BDF8',
        str:   '#98F5D8',
        num:   '#FBBF24',
        type:  '#52C2F8',
        var:   '#EBF6FC',
        const: '#FBBF24',
        prop:  '#EBF6FC',
        comm:  '#5684A8',
        op:    '#14D2E6',
        tag:   '#14D2E6',
        attr:  '#38BDF8'
      },
      terminal: {
        black:   '#081F33',
        red:     '#F87171',
        green:   '#34D399',
        yellow:  '#FBBF24',
        blue:    '#38BDF8',
        magenta: '#818CF8',
        cyan:    '#14D2E6',
        white:   '#EBF6FC'
      }
    },
    light: {
      palette: {
        lightest: '#EBF7F9', // Luminous sea-spray aquamarine paper
        surface:  '#D8EDF2', // Sidebar
        deep:     '#C6E3EB', // Panel / Status Bar
        mid:      '#A4CDD2', // Borders & separators
        primary:  '#02677E', // Secondary text & types
        darkest:  '#021A26'  // Primary editor text
      },
      accent: '#0284C7',
      accentSecondary: '#047A8A',
      syntax: {
        kw:    '#006FA3',
        fn:    '#047A8A',
        str:   '#067E67',
        num:   '#BA3B10',
        type:  '#02677E',
        var:   '#021A26',
        const: '#BA3B10',
        prop:  '#021A26',
        comm:  '#44747E',
        op:    '#006FA3',
        tag:   '#006FA3',
        attr:  '#047A8A'
      },
      terminal: {
        black:   '#021A26',
        red:     '#991B1B',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#006FA3',
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
        darkest:  '#140A06', // Warm charcoal ember
        deep:     '#1F0F09', // Sidebar
        surface:  '#2A160D', // Panel / Status Bar
        mid:      '#4B2718', // Borders & separators
        primary:  '#FDB56C', // Secondary text & types
        lightest: '#FFF3EB'  // Primary editor text
      },
      accent: '#FA741B',
      accentSecondary: '#F59E0B',
      syntax: {
        kw:    '#FA741B',
        fn:    '#F59E0B',
        str:   '#FCD34D',
        num:   '#F87171',
        type:  '#FDB56C',
        var:   '#FFF3EB',
        const: '#F87171',
        prop:  '#FFF3EB',
        comm:  '#9A7363',
        op:    '#FA741B',
        tag:   '#FA741B',
        attr:  '#F59E0B'
      },
      terminal: {
        black:   '#1F0F09',
        red:     '#EF4444',
        green:   '#84CC16',
        yellow:  '#FBBF24',
        blue:    '#FA741B',
        magenta: '#F43F5E',
        cyan:    '#38BDF8',
        white:   '#FFF3EB'
      }
    },
    light: {
      palette: {
        lightest: '#FAF3EC', // Sun-warmed peach-amber ember paper
        surface:  '#F2E6DA', // Sidebar
        deep:     '#E7D6C6', // Panel / Status Bar
        mid:      '#CFB7A0', // Borders & separators
        primary:  '#8F3008', // Secondary text & types
        darkest:  '#2B0F05'  // Primary editor text
      },
      accent: '#BD3900',
      accentSecondary: '#9E2E02',
      syntax: {
        kw:    '#BD3900',
        fn:    '#9E2E02',
        str:   '#824408',
        num:   '#B91C1C',
        type:  '#8F3008',
        var:   '#2B0F05',
        const: '#B91C1C',
        prop:  '#2B0F05',
        comm:  '#7B5848',
        op:    '#BD3900',
        tag:   '#BD3900',
        attr:  '#9E2E02'
      },
      terminal: {
        black:   '#2B0F05',
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
        darkest:  '#0B0819', // Soft wisteria indigo-black
        deep:     '#120E25', // Sidebar
        surface:  '#191433', // Panel / Status Bar
        mid:      '#30275C', // Borders & separators
        primary:  '#B8A8F8', // Secondary text & types
        lightest: '#F6F4FD'  // Primary editor text
      },
      accent: '#9B8AFB',
      accentSecondary: '#C4B5FD',
      syntax: {
        kw:    '#B87CF8',
        fn:    '#9B8AFB',
        str:   '#E5D5FC',
        num:   '#F472B6',
        type:  '#B8A8F8',
        var:   '#F6F4FD',
        const: '#F472B6',
        prop:  '#F6F4FD',
        comm:  '#8076A5',
        op:    '#9B8AFB',
        tag:   '#B87CF8',
        attr:  '#9B8AFB'
      },
      terminal: {
        black:   '#120E25',
        red:     '#FB7185',
        green:   '#34D399',
        yellow:  '#FBBF24',
        blue:    '#9B8AFB',
        magenta: '#B87CF8',
        cyan:    '#67E8F9',
        white:   '#F6F4FD'
      }
    },
    light: {
      palette: {
        lightest: '#F4F5FB', // Calming periwinkle-milk paper
        surface:  '#E6E8F6', // Sidebar
        deep:     '#D7DAED', // Panel / Status Bar
        mid:      '#B6BCDF', // Borders & separators
        primary:  '#4338CA', // Secondary text & types
        darkest:  '#121636'  // Primary editor text
      },
      accent: '#4F46E5',
      accentSecondary: '#4338CA',
      syntax: {
        kw:    '#4F46E5',
        fn:    '#3730A3',
        str:   '#157158',
        num:   '#941848',
        type:  '#4338CA',
        var:   '#121636',
        const: '#941848',
        prop:  '#121636',
        comm:  '#5C668D',
        op:    '#4F46E5',
        tag:   '#4F46E5',
        attr:  '#3730A3'
      },
      terminal: {
        black:   '#121636',
        red:     '#9F1239',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#4F46E5',
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
        darkest:  '#140711', // Warm blackberry plum-black
        deep:     '#1E0C1B', // Sidebar
        surface:  '#291125', // Panel / Status Bar
        mid:      '#4D2045', // Borders & separators
        primary:  '#F8A4CE', // Secondary text & types
        lightest: '#FDF1F6'  // Primary editor text
      },
      accent: '#E94090',
      accentSecondary: '#FB7185',
      syntax: {
        kw:    '#E94090',
        fn:    '#FB8268', // Radiant floral apricot-coral bloom
        str:   '#FED7AA',
        num:   '#FBBF24',
        type:  '#F8A4CE',
        var:   '#FDF1F6',
        const: '#FBBF24',
        prop:  '#FDF1F6',
        comm:  '#986F8D',
        op:    '#E94090',
        tag:   '#E94090',
        attr:  '#FB8268'
      },
      terminal: {
        black:   '#1E0C1B',
        red:     '#FB7185',
        green:   '#34D399',
        yellow:  '#FBBF24',
        blue:    '#E94090',
        magenta: '#F472B6',
        cyan:    '#67E8F9',
        white:   '#FDF1F6'
      }
    },
    light: {
      palette: {
        lightest: '#FCF3F2', // Warm apricot-blossom porcelain paper
        surface:  '#F6E6E3', // Sidebar
        deep:     '#ECD6D1', // Panel / Status Bar
        mid:      '#DAB9B2', // Borders & separators
        primary:  '#7A1A40', // Secondary text & types
        darkest:  '#2B0D18'  // Primary editor text
      },
      accent: '#C41C5E',
      accentSecondary: '#A3164D',
      syntax: {
        kw:    '#C41C5E',
        fn:    '#A3164D',
        str:   '#9E3610',
        num:   '#B45309',
        type:  '#7A1A40',
        var:   '#2B0D18',
        const: '#B45309',
        prop:  '#2B0D18',
        comm:  '#7F5462',
        op:    '#C41C5E',
        tag:   '#C41C5E',
        attr:  '#A3164D'
      },
      terminal: {
        black:   '#2B0D18',
        red:     '#9F1239',
        green:   '#166534',
        yellow:  '#92400E',
        blue:    '#7A1A40',
        magenta: '#86198F',
        cyan:    '#0E7490',
        white:   '#475569'
      }
    }
  }
];

module.exports = { PALETTE_DEFINITIONS };
