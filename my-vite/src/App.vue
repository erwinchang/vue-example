<script>
export default{
  data(){
    return {
      message: 'Hello'
    }
  }
}
</script>

<template>
  <input v-model="message" placeholder="edit me"></input>
  <p>Mesasge is: {{ message }}</p>
</template>
