## CH1.4.4 模板綁定


### v-once

只會render第一次，之後不會改變

```
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
```

<a href="https://imgur.com/kobaA7V"><img src="https://i.imgur.com/kobaA7V.gif" title="source: imgur.com" /></a>