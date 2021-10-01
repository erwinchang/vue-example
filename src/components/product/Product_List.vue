<template>
  <div class="container is-fluid">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <ProductListItem :productItem="productItem" />
      </div>
    </div>
  </div>
</template>

<script>
import Product_List_Item from './Product_List_Item.vue'

export default {
  name: 'ProductList',
  components: {
    ProductListItem: Product_List_Item
  }
}
</script>