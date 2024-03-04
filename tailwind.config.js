/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shake': 'shake 1.2s cubic-bezier(.36, .07, .19, .97) 2 both',
      },
      keyframes: {
        'shake': {
          '10%, 90%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(8px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-8px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          },
        }
      },
    },
    
  },
  plugins: [],
}

