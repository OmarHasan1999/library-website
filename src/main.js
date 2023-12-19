import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './css/HomeHero.css'
import './css/footers.css'
import './css/Header.css'
import './css/navPage.css'
import './css/sidePage.css'
import './css/mainPage.css'



const app = createApp(App)

app.use(router)

app.mount('#app')
