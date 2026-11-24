/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          DEFAULT: '#E8927C', // Reference Warm Peach CTA
          hover: '#D97760',
          dark: '#C86650',
          light: '#F0A794',
          subtle: '#FDF0EC'
        },
        forest: {
          DEFAULT: '#1B3329', // Reference Dark Sage / Forest Green
          dark: '#14261E',
          deep: '#0F1D17',
          light: '#234C3D',
          sage: '#5F7161',
          soft: '#EAF0EB',
          subtle: '#F4F7F5'
        },
        cream: {
          DEFAULT: '#FAF6EE', // Reference Warm Beige / Cream Background
          dark: '#F0E8D8',
          light: '#FDFBF7',
          card: '#FFFFFF'
        },
        charcoal: {
          DEFAULT: '#1A2420',
          light: '#2D3A34',
          muted: '#5C6B63',
          faint: '#8E9C94'
        },
        accent: {
          DEFAULT: '#E8927C',
          gold: '#E5A96A',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(27, 51, 41, 0.08)',
        'card': '0 15px 35px -5px rgba(232, 146, 124, 0.12), 0 5px 15px rgba(27, 51, 41, 0.04)',
        'elevated': '0 20px 45px -10px rgba(27, 51, 41, 0.18)',
        'peach': '0 12px 30px -5px rgba(232, 146, 124, 0.45)',
        'glow': '0 0 40px rgba(232, 146, 124, 0.35)'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      }
    },
  },
  plugins: [],
}
