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
  <div class="outer" v-on:click="msgShow('Outer')">
  <span>Outer</span>
    <div class="inner" v-on:click="msgShow('Inner')">Inner</div>
  </div>
</template>