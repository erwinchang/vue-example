<script>
export default{
  data(){
    return {
      lists: [
        {
          id: 'task01',
          title: '選項1',
          isDone: false
        },
        {
          id: 'task02',
          title: '選項2',
          isDone: false
        },
        {
          id: 'task03',
          title: '選項3',
          isDone: true
        }
      ]
    }
  },
  computed:{
    todoLists(){
      return this.lists.filter( d => !d.isDone)
    },
    doneLists(){
      return this.lists.filter( d => d.isDone)
    }
  }
}
</script>

<template>
  <h1>toDo</h1>
  <ul>
    <li v-for="i in todoLists" :key="i.id">
        <label><input v-model="i.isDone" type="checkbox"> {{ i.title }} </label>
    </li>
  </ul>
  <h1>Done</h1>
  <ul>
    <li v-for="i in doneLists" :key="i.id">
        <label><input v-model="i.isDone" type="checkbox"> {{ i.title }} </label>
    </li>
  </ul>  
</template>