module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  theme: {
    screens: {
      pc: '768px',
      pcL: '1400px',
      sp: { max: '767px' },
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
};
