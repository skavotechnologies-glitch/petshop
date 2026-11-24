/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF784F',
          dark: '#E85F36',
          light: '#FF9776',
          subtle: '#FFF0EC'
        },
        secondary: {
          DEFAULT: '#234C3D',
          dark: '#1A392E',
          light: '#2E614E'
        },
        cream: {
          DEFAULT: '#FFF9F0',
          dark: '#F7EFE2',
          light: '#FFFDF9'
        },
        accent: {
          DEFAULT: '#FFD66B',
          dark: '#F4C244',
          light: '#FFE494'
        },
        softgreen: {
          DEFAULT: '#E6F1E9',
          dark: '#C8E1D0'
        },
        charcoal: {
          DEFAULT: '#252525',
          light: '#525252',
          muted: '#737373'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(35, 76, 61, 0.08)',
        'card': '0 15px 35px -5px rgba(255, 120, 79, 0.08), 0 5px 15px rgba(0, 0, 0, 0.03)',
        'elevated': '0 20px 45px -10px rgba(35, 76, 61, 0.15)',
        'warm': '0 12px 30px -5px rgba(255, 120, 79, 0.25)'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      }
    },
  },
  plugins: [],
}
