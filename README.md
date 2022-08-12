## CH1.4.5 CSS綁定


v-bind:class 

### CSS

輸入超過5字，字變紅色

```
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
```

<a href="https://imgur.com/nJEn5pZ"><img src="https://i.imgur.com/nJEn5pZ.gif" title="source: imgur.com" /></a>