
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    '@pinia/nuxt',
    [
      '@vee-validate/nuxt',
      {
        autoImports: true,
      },
    ],
    "shadcn-nuxt",
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        }
      }
    }],
    "@nuxt/icon"
  ],
  plugins: [
    '~/plugins/vue-query.ts'
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  }
})
