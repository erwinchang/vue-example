## CH1.6 條件判斷與列表渲染

1. v-for與陣列
2. v-for與物件
3. v-for與數字範圍
4. v-for與template
5. v-for與列表的排序(sort)

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

### CH1.6.2 v-for與數字範圍

```
  <ul>
    <li class="page-item" v-for="page in 10">
      <a class="page-link" href>{{ page }}</a>
    </li>
  </ul>
```

### v-for與列表的排序(sort)

```
  computed:{
    evenNumbers () {
      return this.numbers.filter(number => number % 2 === 0)
    },
    sortedNumbers(){
      //注意sort會改變this.number的順序，改用copy方式(即...this.number)
      return [...this.numbers].sort((a,b) => b -a )
    },
xx
  <div class="block" v-for="i in evenNumbers">
    {{ i }}
  </div>
  <ul>
    <li>number: {{ myNumbers }}</li>
    <li>{{ sortedNumbers }}</li>
  </ul>    
```

 測試如下
<a href="https://imgur.com/7G3F3w8"><img src="https://i.imgur.com/7G3F3w8.png" title="source: imgur.com" width="400px" /></a>