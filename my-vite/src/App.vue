<script>
export default{
  data(){
    return {
      num1: 0,
      num2: 0
    }
  },
  computed:{
    sum(){
      return this.num1 + this.num2
    }
  }
}
</script>

<template>
<input v-model.number="num1" /> + <input v-model.number="num2" /> = {{ sum }}
</template>
