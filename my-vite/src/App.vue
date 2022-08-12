<script>
export default{
  data(){
    return {
      message: ''
    }
  },
  computed:{
    isVaild: function() {
      return this.message.length <= 5
    },
    msgStyle: function() {
      console.log(this.message.length)
      return {
        'border': this.isVaild ? '' : 'red solid 1px',
        'color' : this.isVaild ? '' : 'red'
      }
    }
  }
}
</script>

<template>
  <input 
    type="text" 
    v-model.trim="message"
    placeholder="請勿超過5字"
    v-bind:style="msgStyle" />
</template>