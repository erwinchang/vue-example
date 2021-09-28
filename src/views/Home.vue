<template>
  <div class="home container">
    <Product />
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "../components/Product.vue"
import Cart from "../components/Cart.vue"

import { ref } from "vue"

export default {
  name: 'Home',
  components: {
    Product,
    Cart
  }
}
</script>
