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


### 如何一次控制多組CSS

```
<script>
export default{
  data(){
    return {
      message: ''
    }
  },
  computed:{
    isVaild: function() {
      return this.message.length <= 5
    },
    msgStyle: function() {
      console.log(this.message.length)
      return {
        'border': this.isVaild ? '' : 'red solid 1px',
        'color' : this.isVaild ? '' : 'red'
      }
    }
  }
}
</script>

<template>
  <input 
    type="text" 
    v-model.trim="message"
    placeholder="請勿超過5字"
    v-bind:style="msgStyle" />
</template>
```

<a href="https://imgur.com/GjXIFKi"><img src="https://i.imgur.com/GjXIFKi.gif" title="source: imgur.com" /></a>