<script>
export default{
  data(){
    return {
      quantity: 50,
      price: 100
    }
  },
  computed:{
    subtotalComputed: function(){
      console.log('computed')
      return this.quantity * this.price
    }
  },
  methods:{
    subtotalMethods: function(){
      console.log('Methods')
      return this.quantity * this.price
    }
  }
}
</script>

<template>
  <p>total {{ subtotalComputed }}</p>
  <p>total {{ subtotalComputed }}</p>
  <p>total {{ subtotalComputed }}</p>
  <p>total {{ subtotalMethods() }}</p>
  <p>total {{ subtotalMethods() }}</p>
  <p>total {{ subtotalMethods() }}</p>
</template>
