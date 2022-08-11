## CH1.4.4 模板綁定


### v-text

原本採用```{{ }}```，來取得變數內容  
也可以採用v-text方式  

```
<div v-text="text"></div>

<div> {{ text }} </div>
```

範例如下  

```
<template>
  <div v-text="text">World!</div>
  <br/>
  <div> {{ text }} World!</div>
</template>
```

輸出如下  
**採用v-text方式，只會出現HELLO**  


<a href="https://imgur.com/sLy5EMn"><img src="https://i.imgur.com/sLy5EMn.png" title="source: imgur.com" /></a>