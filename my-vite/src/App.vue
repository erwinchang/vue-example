<script>
export default{
  data(){
    return {
      isChecked: false
    }
  }
}
</script>

<template>
  <input type="checkbox" id="checkbox"  v-model="isChecked" />
  <label for="checkbox">Status: {{ isChecked }}</label>
</template>
