import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/flaticon.css'
import './assets/css/animate.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/bootsnav.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    home: 'Home',
    about: 'About',
  },
  ja: {
    home: 'ホーム',
    about: '私について',
    education: '学歴',
    experience: '経験',
    certifications: '認定資格',
    skills: 'スキル',
    contact: 'お問い合わせ',
  },
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(i18n)
app.mount('#app')
