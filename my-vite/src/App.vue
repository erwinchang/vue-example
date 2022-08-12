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
  <div class="outer" @click="msgShow('Outer')">
    <span>Outer</span>
    <div class="inner" @click="msgShow('Inner')">Inner</div>
  </div>
</template>