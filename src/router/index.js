import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../components/product/Product_List.vue'

const routes = [
  {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/',
    redirect: '/inventory'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
