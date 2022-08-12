## CH1.5 事件處理

### 1.5.3 v-on與修飾子

#### .prevent

防止元件的預設行為(ex. href)

##### 會執行連結動作(即tag 123)

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
  <a href="#123" class="btn" @click="msgShow('hello')">click me!</a>
</template>
```
<a href="https://imgur.com/EVNdTbV"><img src="https://i.imgur.com/EVNdTbV.gif" title="source: imgur.com" /></a>


##### 加入.prevent，不會執行連結動作(即tag 123)

```
<template>
  <a href="#123" class="btn" @click.prevent="msgShow('hello')">click me!</a>
</template>
```

<a href="https://imgur.com/tLvHjx7"><img src="https://i.imgur.com/tLvHjx7.gif" title="source: imgur.com" /></a>