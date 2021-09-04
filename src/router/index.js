import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Provaider from '../views/Supply.vue'
import About from '../views/About.vue'
import Dashboard from "../views/Dashboard";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
		meta: {
			key: 1,
		},
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    component: About,
		meta: {
			key: 2,
		},
  },
  {
    path: '/provaider',
    name: 'Provaider',
    component: Provaider,
		meta: {
			key: 3,
		},
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
