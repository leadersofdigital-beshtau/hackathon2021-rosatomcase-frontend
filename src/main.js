import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'normalize.css';
import './styles/main.scss'

App.use(VueRouter)
createApp(App).mount('#app')
