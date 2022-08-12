<script>
export default{
  data(){
    return {
      isShow: false
    }
  },
  computed: {
    modalStyle() {
      return {
        'display': this.isShow ? '' : 'none'
      }
    }
  }
}
</script>

<template>
  <div class="modal-mask" v-bind:style="modalStyle">
    <div class="modal-container" @click="isShow = false">
      <div class="modal-body">Hello!</div>
    </div>
  </div>
  <button @click="isShow = true">Click Me</button>
</template>

<style scoped>
.modal-mask {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}
.modal-container {
  cursor: pointer;
  display: table-cell;
  vertical-align: middle;
}
.modal-body {
  cursor: auto;
  display: block;
  width: 50%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
}
</style>