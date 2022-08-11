<script>
export default{
  data(){
    return {
      picked: 1
    }
  }
}
</script>

<template>
  <div>
    <input type="radio" id="one" value="1" v-model="picked" />
    <label for="one">One</label>    
  </div>
  <div>
    <input type="radio" id="two" value="2" v-model="picked" />
    <label for="two">Two</label>
  </div>
  <span>Picked: {{ picked }}</span>
</template>
