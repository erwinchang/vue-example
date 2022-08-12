<script>
export default{
  data(){
    return {
      count: 0
    }
  }
}
</script>

<template>
  <p>Count: {{ count }}</p>
  <button v-on:click="count++">Plus</button>
</template>