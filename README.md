## CH1.5 事件處理

### 1.5.3 v-on與修飾子

.stop
同event.stopPropagation()
防止事件冒泡


#### 1 未加.stop，內部的click會傳到外部
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
  <div class="outer" v-on:click="msgShow('Outer')">
  <span>Outer</span>
    <div class="inner" v-on:click="msgShow('Inner')">Inner</div>
  </div>
</template>
```

<a href="https://imgur.com/HOxJ5BV"><img src="https://i.imgur.com/HOxJ5BV.gif" title="source: imgur.com" /></a>



------------

參考說明
- [[JavaScript]所謂的「停止事件」到底是怎麼一回事][1]


[1]:https://ithelp.ithome.com.tw/articles/10198999
[2]:https://book.vue.tw/CH1/1-5-events.html