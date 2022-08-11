<script>
export default{
  data(){
    return {
      isBtnDisable: true
    }
  }
}
</script>

<template>
  <button v-bind:disabled="isBtnDisable"> Click me!</button>
</template>
