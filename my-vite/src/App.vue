<script>
export default{
  data(){
    return {
      message: ''
    }
  },
  methods:{
    msgShow: function(msg) {
      console.log(msg)
    }
  }
}
</script>

<template>
  <a href="#123" class="btn" @click.prevent="msgShow('hello')">click me!</a>
</template>