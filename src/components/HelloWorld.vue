<template>
  <div>
    <h2> Filter LearnVue Articles </h2>
    <input 
      type = 'text'
      placeholder='Filter Search'
      v-model='query'
      />
      <br>
      {{ query }}
      <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
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
