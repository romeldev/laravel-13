import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import SidebarLayout from './pages/sidebar/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: SidebarLayout,
  },
  {
    path: '/home',
    name: 'home-old',
    component: HomePage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router