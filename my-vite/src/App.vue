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