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

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
