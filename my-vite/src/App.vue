<script>
export default{
  data(){
    return {
      message: ''
    }
  }
}
</script>

<template>
  <input 
    type="text" 
    v-model.trim="message"
    v-bind:class="{ 'error': message.length > 5 }"/>
</template>

<style>
.error {
  border: red sold 1px;
  color: red;
}
</style>