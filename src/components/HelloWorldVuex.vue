<template>
  <div class="cart">
    <h1>This is an vuex name : [{{name}}] page</h1>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'

export default {
  name: 'HelloWorldVuex',
  setup () {
    const store = useStore();

    let name = computed(function () {
      return store.state.name
    })

    return {
      name
    }
  }
}
</script>