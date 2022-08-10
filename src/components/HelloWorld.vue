<template>
  <h1>{{ msg }}</h1>
  <p> computed: total {{ subtotalComputed }}</p>
  <p> methods: total {{ subtotalMethods() }}</p>
  <p> methods2: total {{ subtotalMethods2(120) }}</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
      quantity: 5,
      price: 100
    }
  },
  computed: {
    subtotalComputed: function (){
      console.log('computed');
      return this.quantity * this.price;
    }
  },
  methods:{
    subtotalMethods: function(){
      console.log('methods');
      return this.quantity * this.price;
    },
    subtotalMethods2(price2){
      console.log('methods2');
      return this.quantity * price2;
    }
  }
}
</script>
