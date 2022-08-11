## 如何綁定標籤屬性


v-bind單向綁定用在: 標籤的id,圖片的src,連結的href等DOM的屬性  
v-model表單綁定用在: input textare select等  

語去下例兩種皆可  
```
<p v-bind:id="customId">...</p>
<p :id="customId">...</p>
```

### 採用v-bind指令方式如下

```
<p v-bind:id="customId">...</p>

<script>
	data(){
		return customId: 'item-id-1'
	}
</script>
```

HTML render如下
```
<p id="item-id-1">...</p>
```

v-bind可以寫成如下
```
<p :id="customId">...</p>
```

```:```表示Vue實体v-bind綁定後屬性


### 範例

```
<script>
export default{
  data(){
    return {
      isBtnDisable: true
    }
  }
}
</script>

<template>
  <button v-bind:disabled="isBtnDisable"> Click me!</button>
</template>
```
