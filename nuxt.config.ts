// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@nuxthub/core',
    '@nuxt/icon',
    'nuxt-time',
    '@nuxtjs/html-validator',
    // TODO: 'nuxt-og-image',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      htmlAttrs: { lang: 'en' },
    },
  },
  runtimeConfig: {
    github: {
      token: '',
    },
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-04-03',
  hub: {
    ai: true,
    analytics: true,
    cache: true,
    vectorize: {
      issues: {
        dimensions: 1024,
        metric: 'euclidean',
      },
    },
    kv: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
