## CH1.5 事件處理

v-on : 
```
v-on:[事件名稱]="運算式"
```

整理一下，前面說明

v-model : 資料連結等
v-bind  : css連結等

```
v-bind單向綁定用在: 標籤的id,圖片的src,連結的href等DOM的屬性
v-model表單綁定用在: input textare select等

v-model.trim="message"
v-bind:class="{ 'error': message.length > 5 }"/>

v-text : 字串
v-html : HTML render
v-once : 只會render第一次，之後不會改變
v-pre : 想要在網頁上面呈現{{ }}

v-mode.lazy : 改為change事件，當使用者離開輸入框時，才會更新data
v-mode.number : 將文字轉為字串
v-mode.trim : 去除文字輸入空白部分
```

### 1.5.1 v-on事件處理

```
v-on:[事件名稱]="運算式"
```

```
<script>
export default{
  data(){
    return {
      count: 0
    }
  }
}
</script>

<template>
  <p>Count: {{ count }}</p>
  <button v-on:click="count++">Plus</button>
</template>
```