<script>
export default{
  data(){
    return {
      text: '<h1>HELLO</h1>'
    }
  }
}
</script>

<template>
  <div v-text="text"></div>
  <br />
  <div v-html="text"></div>
</template>
