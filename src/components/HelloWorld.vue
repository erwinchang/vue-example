<template>
  <div>
    <h2> Filter LearnVue Articles </h2>
    <input 
      type = 'text'
      placeholder='Filter Search'
      v-model='query'
      />
      <br>
      <button @click="reset">Reset</button>
      <SearchResults :query="query" />
  </div>
</template>

<script>
import { ref } from 'vue'
import SearchResults from './SearchResults.vue'
export default {
  components:{
    SearchResults,
  },
  setup(){
    const query = ref('')

    const reset = (evt) =>{
      console.log(query)
      query.value = ''  //clear the query
    }

    return {
      reset,
      query,
    }
  },
}
</script>

<style>
  input[type='text'] {
    margin-bottom: 20px;
    padding: 10px;
  }
</style>
