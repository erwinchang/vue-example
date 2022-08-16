<script>
export default{
  data(){
    return {
      book:{
        title: '008js',
        author: 'Kuro',
        publishedAt: '2019/09'
      },
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  computed:{
    evenNumbers () {
      return this.numbers.filter(number => number % 2 === 0)
    },
    sortedNumbers(){
      //注意sort會改變this.number的順序，改用copy方式(即...this.number)
      return [...this.numbers].sort((a,b) => b -a )
    },
    myNumbers(){
      return this.numbers
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="val in book">{{ val }}</li>
  </ul>
  <ul>
    <li v-for="(val,key) in book">{{ key }} / {{ val }}</li>
  </ul>  
  <ul>
    <li v-for="(val,key,index) in book">{{ index }} / {{ key }} / {{ val }}</li>
  </ul>    
  <ul>
    <li class="page-item" v-for="page in 10">
      <a class="page-link" href>{{ page }}</a>
    </li>
  </ul>
  <div class="block" v-for="i in evenNumbers">
    {{ i }}
  </div>
  <ul>
    <li>number: {{ myNumbers }}</li>
    <li>{{ sortedNumbers }}</li>
  </ul>
</template>