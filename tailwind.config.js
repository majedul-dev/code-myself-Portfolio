// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(250%)' },
        },
        'star-movement-top': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-250%)' },
        },
      },
      animation: {
        'star-movement-bottom': 'star-movement-bottom linear infinite',
        'star-movement-top': 'star-movement-top linear infinite',
      },
    },
  },
  plugins: [],
}