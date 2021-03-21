const globImporter = require('node-sass-glob-importer');

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hapily',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/swiper', ssr: false },
    { src: '@/plugins/routerSetting' },
    { src: '@/plugins/lottie.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '@/assets/css/variable/**/*.scss',
      '@/assets/css/mixin/**/*.scss',
      '@/assets/css/function/**/*.scss',
    ],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(_, { loaders: { scss } }) {
      const sassOptions = scss.sassOptions || {};
      sassOptions.importer = globImporter();
      scss.sassOptions = sassOptions;
    },
  },
  server: {
    port: 8000,
  },
  vue: {
    config: {
      productionTip: true,
      devtools: true,
    },
  },
};
