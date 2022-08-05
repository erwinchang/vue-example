<template>
  <Test01 msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Test01 from './components/Test01.vue'

export default {
  name: 'App',
  components: {
    Test01
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
