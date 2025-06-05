import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js' // importa el router
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './style.css'



createApp(App).use(router).mount('#app')

