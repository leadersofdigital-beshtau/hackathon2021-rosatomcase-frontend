import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Supply from '../views/Supply.vue'
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
    path: '/supply',
    name: 'Supply',
    component: Supply,
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
