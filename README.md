
## v-mode.number

問題:若要直接將輸入示為數字處理
採用: v-mode.number將文字轉為字串

```
<script>
export default{
  data(){
    return {
      num1: 0,
      num2: 0
    }
  },
  computed:{
    sum(){
      return this.num1 + this.num2
    }
  }
}
</script>

<template>
<input v-model="num1" /> + <input v-model="num2" /> = {{ sum }}
</template>
```

範例如下,變成字串相加，非數字加法
<a href="https://imgur.com/l7w4g3U"><img src="https://i.imgur.com/l7w4g3U.gif" title="source: imgur.com" width="400px" /></a>