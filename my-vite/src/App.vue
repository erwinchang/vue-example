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
  <input v-model="text" />
  <div> {{ text }}</div>
  <div v-once> {{ text }}</div>
</template>
