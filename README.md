## CH1.5.4 鍵盤修飾子

處理key事件如下(event.key)

```
.enter
.tab
.delete (包含delete與backspace鍵)
.esc
.space
.up
.down
.left
.right
.ctrl
.alt
.shift
.meta (對應該window鍵)
```

### enter事件

```
<script>
export default{
  data(){
    return {
      msg: '',
      message: ''
    }
  },
  methods:{
    addToMessages(text){
      console.log(text)
    }
  }
}
</script>

<template>
  <input type="text"
    placeholder="輸入任意文字後按下Enter鍵"
    v-model.trim="msg"
    @keydown.enter="addToMessages(msg)" />
</template>
```

<a href="https://imgur.com/y3jFYrr"><img src="https://i.imgur.com/y3jFYrr.gif" title="source: imgur.com" width="400px" /></a>