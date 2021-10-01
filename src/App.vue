<template>
  <Navbar />
  <div class="container mt-6">
    <div class="columns">
      <div class="column is-12 column--align-center">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/core/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
</style>
