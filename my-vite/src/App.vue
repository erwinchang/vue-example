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
  <p><span>Multiline Mesasge is:</span>{{ message }}</p>
  <textarea v-model="message" placeholder="add multiple lines"></textarea> 
</template>
