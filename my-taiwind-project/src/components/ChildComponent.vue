<template>
  <div class="flex flex-col items-center py-16">
    <div class="w-96 h-96">
      <TransitionRoot
        appear
        :show="isShowing"
        as="template"
        enter="transform transition duration-[400ms]"
        enter-from="opacity-0 rotate-[-120deg] scale-50"
        enter-to="opacity-100 rotate-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leave-from="opacity-100 rotate-0 scale-100 "
        leave-to="opacity-0 scale-95 "
      >
        <div class="w-full h-full rounded-md shadow-lg" />
      </TransitionRoot>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, watch } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

const props = defineProps({
  show: Boolean
})
const { show } = toRefs(props)
const isShowing = ref(true)

watch(show, () => {
  isShowing.value = false

  setTimeout(() => {
    isShowing.value = true
  }, 500)
})
</script>