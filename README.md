## CH1.5 事件處理

### 1.5.3 v-on與修飾子

#### .capture

JS事件流程可以分成兩種機制：
事件冒泡 (Event Bubbling) : 由內到外
事件捕獲 (Event Capturing) : 由外到內


範例如下
若點Inner，會先triggle inner再triggle outer
```
<script>
export default{
  data(){
    return {
      message: ''
    }
  },
  methods:{
    msgShow: function(msg) {
      console.log(msg)
    }
  }
}
</script>

<template>
  <div class="outer" @click="msgShow('Outer')">
    <span>Outer</span>
    <div class="inner" @click="msgShow('Inner')">Inner</div>
  </div>
</template>
```

<a href="https://imgur.com/ytxV18G"><img src="https://i.imgur.com/ytxV18G.gif" title="source: imgur.com" /></a>
