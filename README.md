## CH1.4.4 模板綁定


### v-html

v-text會變成HTML字串，不會變成HTML來render
需採用v-html，變成HTML來render

```
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
```

<a href="https://imgur.com/tX3Iyeb"><img src="https://i.imgur.com/tX3Iyeb.png" title="source: imgur.com" /></a>