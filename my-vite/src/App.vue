<script>
export default{
  data(){
    return {
      count: 0
    }
  },
  methods:{
    plus(){
      this.count++
    }
  }
}
</script>

<template>
  <p>Count: {{ count }}</p>
  <button v-on:click="plus">Plus</button>
</template>