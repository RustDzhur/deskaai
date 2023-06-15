const {fontFamily} = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  preflight: false,
  content: ['./src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: {
          3: 'rgba(226, 240, 253, 0.08)',
          6: 'rgba(223,239,254,.139)',
          7: 'rgba(224,243,255,.182)',
          8: 'rgba(229,242,254,.265)',
          9: 'rgba(225,241,255,.412)',
          11: 'rgba(239,247,255,.615)',
          12: 'rgba(253,254,255,.927)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          25: '#F5F8FF',
          50: '#EBF5FF',
          100: '#E1EFFE',
          200: '#C3DDFD',
          300: '#A4CAFE',
          400: '#528BFF',
          600: '#1C64F2',
          700: '#1A56DB',
        },
        bg: 'hsl(var(--background))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // primary: {

        // },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: 'calc(var(--radius) - 4px)',
        },
        fontFamily: {
          sans: ['var(--font-sans)', ...fontFamily.sans],
        },
        keyframes: {
          'accordion-down': {
            from: {height: 0},
            to: {height: 'var(--radix-accordion-content-height)'},
          },
          'accordion-up': {
            from: {height: 'var(--radix-accordion-content-height)'},
            to: {height: 0},
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
  },
  plugins: [],
};
