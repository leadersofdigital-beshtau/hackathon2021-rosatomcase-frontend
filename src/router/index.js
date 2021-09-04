import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Supply from '../views/Provider.vue'
import About from '../views/About.vue'
import Tasks from "../views/Tasks";

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
    path: '/dashboard/tasks',
    name: 'Tasks',
    component: Tasks
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
    path: '/dashboard/supply',
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
