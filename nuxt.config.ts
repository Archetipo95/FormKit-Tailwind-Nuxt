/**
 * Nuxt config
 * @see https://v3.nuxtjs.org/api/configuration/nuxt.config
 */
export default defineNuxtConfig({
  devtools: { enabled: true },
  /**
   * Formkit config
   * @see https://formkit.com/getting-started/installation
   */
  formkit: {
    // Experimental support for auto loading (see note):
    //autoImport: true,
  },
  /**
   * Tailwind config
   * @see https://tailwindcss.com/docs/installation
   */
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss',
  },
  /**
   * CSS config
   * @see https://nuxt.com/docs/api/configuration/nuxt-config#css
   */
  css: ['~/assets/css/tailwind.scss'],
  /**
   * Nuxt Modules
   * @see https://nuxt.com/docs/guide/concepts/modules
   */
  modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
