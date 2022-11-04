export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  // head: {
  //   title: "Bandung Pedas",
  //   titleTemplate: "%s - %title%",
  //   meta: [
  //     { charset: "utf-8" },
  //     { name: "viewport", content: "width=device-width, initial-scale=1" },
  //     {
  //       hid: "description",
  //       name: "description",
  //       content: "Aneka Keripik dan Cemilan Pedas",
  //     },
  //     { name: "format-detection", content: "telephone=no" },
  //   ],
  //   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main.css",
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "vue-slick-carousel/dist/vue-slick-carousel-theme.css",
    "viewerjs/dist/viewer.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "./plugins/vue-slick-carousel.js" },
    { src: "./plugins/v-viewer.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/image", "@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-seo",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        cssnano: {},
      },
    },
  },

  // Nuxt-Seo Config
  seo: {
    baseUrl: "https://bandung-pedas.web.app/",
    name: "Bandung Pedas",
    templateTitle: "%title% - %name%" || "%name%",
    description: "Aneka Keripik dan Cemilan Pedas",
    keywords:
      "keripik, keripik kaca, keripik tempe, keripik singkong, keripik kentang",
    canonical: "auto",
    isForcedTrailingSlash: false,
    twitter: {
      site: "@bandungpedas",
      creator: "@bandungpedas",
      card: "summary",
    },
  },
};
