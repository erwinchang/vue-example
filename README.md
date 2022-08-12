## CH1.6 條件判斷與列表渲染

### CH1.6.1 v-if/v-show

v-if : 直接將元素移除，其它(v-else-if,v-else)  
v-show : 設定display為none(即隱藏)  

```
<div v-if="isShow">v-if</div>
<div v-show="isShow">v-show</div>
```

通過```<template>```來包覆  

```
<script>
export default{
  data(){
    return {
      value: 'B'
    }
  }
}
</script>

<template>
  <template v-if="value === 'A'">
    <h1>Title A</h1>
    <p>Paragrah A -1 </p>
    <p>Paragrah A -2 </p>
  </template>
  <template v-else>
    <h1>Title B</h1>
    <p>Paragrah B -1 </p>
    <p>Paragrah <Btn></Btn> -2 </p>
  </template>  
</template>
```