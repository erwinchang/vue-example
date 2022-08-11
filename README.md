## 如何綁定標籤屬性


v-bind單向綁定用在: 標籤的id,圖片的src,連結的href等DOM的屬性  
v-model表單綁定用在: input textare select等  

v-bind語法下例兩種皆可  
```
<p v-bind:id="customId">...</p>
<p :id="customId">...</p>
```

### 2 表單綁定v-model

```
<script>
export default{
  data(){
    return {
      message: 'Hello'
    }
  }
}
</script>

<template>
  <input v-model="message" placeholder="edit me"></input>
  <p>Mesasge is: {{ message }}</p>
</template>
```

範例如下

![image](https://github.com/erwinchang/vue-example/blob/734b1ba95919c9b3907bb565150de06fcfb6237e/test.gif)


### 2-2 textarea

```
<testarea v-mode="message" placeholder="add multiple lines"></testarea>
```