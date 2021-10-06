import { createRouter, createWebHistory } from 'vue-router'
import CartList from '../components/cart/Cart_List.vue'
import ProductList from '../components/product/Product_List.vue'

const routes = [
  {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/',
    redirect: '/inventory'
  },
  {
    path: '/cart',
    component: CartList
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
