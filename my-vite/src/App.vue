<script>
export default{
  data(){
    return {
      amount: 0,
      count: 0
    }
  },
  methods:{
    plus(amount, event){
      console.log(event.target.tagName)
      this.count += amount
    }
  }
}
</script>

<template>
  <p><input v-model.number="amount" /></p>
  <p>Count: {{ count }}</p>
  <button v-on:click="plus(amount,$event)">Plus</button>
</template>