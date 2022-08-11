<script>
export default{
  data(){
    return {
      text: 'HELLO'
    }
  }
}
</script>

<template>
  <div v-text="text">World!</div>
  <br/>
  <div> {{ text }} World!</div>
</template>
