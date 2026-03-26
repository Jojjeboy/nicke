import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

import en from './locales/en.json'
import sv from './locales/sv.json'

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'sv', // Default locale
  fallbackLocale: 'en',
  messages: {
    en,
    sv
  }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
