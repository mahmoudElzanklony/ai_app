// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt','@nuxtjs/supabase'],
  shadcn: [
    {
      prefix: '',
      componentDir: './components/ui'
    },
    {
      prefix: '',
      componentDir: './components'
    }
  ],
  supabase: {
    redirectOptions: {
      login: '/auth',
      callback: '/confirm',
      exclude: ['/'],
    }
  }
  /*components:[
    {
      path:'~/components/ui',
      extensions:['.vue'],
      prefix:'',
    },
    {
      path:'~/components',
      extensions:['.vue'],
      prefix:'',
    }
  ]*/
})
