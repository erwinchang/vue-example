## 如何綁定標籤屬性

採用v-bind指令方式如下

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

------

範例設定button disabled  
此時button預設為disabled  

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