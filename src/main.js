import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css';
import './assets/fonts/ProximaNova/stylesheet.css';
import './styles/main.scss'
import router from './router'

createApp(App).use(router).mount('#app')
