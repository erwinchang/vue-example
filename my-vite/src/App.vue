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