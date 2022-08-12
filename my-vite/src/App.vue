<script>
export default{
  data(){
    return {
      msg: '',
      message: ''
    }
  },
  methods:{
    addToMessages(text){
      console.log(text)
    }
  }
}
</script>

<template>
  <input type="text"
    placeholder="輸入任意文字後按下Enter鍵"
    v-model.trim="msg"
    @keydown.enter="addToMessages(msg)" />
</template>