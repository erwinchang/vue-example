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