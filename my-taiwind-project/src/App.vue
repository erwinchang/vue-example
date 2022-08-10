<script setup>
  import { Disclosure } from '@headlessui/vue'
  import { reactive,ref,toRef } from 'vue'
  import ChildComponent from './components/ChildComponent.vue'

  const colorArray = ['bg-cyan-300', 'bg-amber-300', 'bg-emerald-300', 'bg-rose-300']
  const randomColor = ref(colorArray[0])
  const show = ref(true)

  const transition = () => {    
    show.value = !show.value
    randomColor.value = colorArray[Math.floor(colorArray.length * Math.random())]
    console.log('transition')
  }

  let people = reactive({name:'mika', age:'22'})
  let people2 = toRef(people,"name")
  let people3 = ref(people.name)
  console.log('people.name =' + people.name)
  console.log('people2.value =' + people2.value)
  console.log('people3.value =' + people3.value)
  setTimeout(()=>{
    people3.value = 'admin'
    console.log('-- change people.name')
    console.log('people.name =' + people.name)
    console.log('people2.value =' + people2.value)
    console.log('people3.value =' + people3.value)
  })
</script>

<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <button type="button" @click="transition" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Click to transition</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <ChildComponent :show="show" :randomColor="randomColor" />
        </div>
      </div>
    </main>
  </div>
</template>
