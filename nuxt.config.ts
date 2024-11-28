// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", language: "en-US" },
      { code: "ru", language: "ru-RU" },
    ],
    defaultLocale:"ru",
  },
});
