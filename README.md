## CH1.6 條件判斷與列表渲染

### CH1.6.2 v-for


```
<script>
export default{
  data(){
    return {
      arr: ['008', 'JS', 'awesome']
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="item in arr">{{ item }}</li>
  </ul>

  <ul>
    <li v-for="(item,index) in arr">{{ index }} / {{ item }}</li>
  </ul>  
</template>
```

<a href="https://imgur.com/RjgeCqy"><img src="https://i.imgur.com/RjgeCqy.png" title="source: imgur.com" width="400px" /></a>

-------

```
<script>
export default{
  data(){
    return {
      book:{
        title: '008js',
        author: 'Kuro',
        publishedAt: '2019/09'
      }
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="val in book">{{ val }}</li>
  </ul>
  <ul>
    <li v-for="(val,key) in book">{{ key }} / {{ val }}</li>
  </ul>  
  <ul>
    <li v-for="(val,key,index) in book">{{ index }} / {{ key }} / {{ val }}</li>
  </ul>    
</template>
```

<a href="https://imgur.com/5qjiy9u"><img src="https://i.imgur.com/5qjiy9u.png" title="source: imgur.com" /></a>