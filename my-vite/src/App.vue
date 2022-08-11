<script>
export default{
  data(){
    return {
      selected: ''
    }
  }
}
</script>

<template>
  <select v-model="selected">
    <option disabled value="">請選擇</option>
    <option value="台北市">台北市</option>
    <option value="台中市">台中市</option>
    <option value="台南市">台南市</option>
  </select>
  <p>Selected: {{ selected || '未選擇' }} </p>
</template>
