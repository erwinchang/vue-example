## vite example 


進入vue3之後，建議改用vite的方式或vue-clicd v
Vite 通过在一开始将应用中的模块区分为 依赖 和 源码 两类，改进了开发服务器启动时间
```
npm init vite-app vite-ex01
```

執行後台
```
npm run dev
```

重新build
```
npm run build
```

![image](https://github.com/erwinchang/vue-example/blob/vite-ex02/test.gif)


### 說明

什麼是Composition API
- 是指Vue 3.0新增功能，將一些東西寫在setup()裡面

vue2.0是採用data, 在vue3.0採用setup()
```
## vue2.0
data:{
	msg: 'Hello World'
}
## vue3.0
setup() {
	const msg = ref('Hello World');
	return {msg}
}
```


Reactive Data in the Composition API
```
import { ref } from 'vue'
```

### 1-1 如何增加reset function

```
<script>
import { ref } from 'vue'
export default {
  setup(){
    const query = ref('')

    const reset = (evt) =>{
      console.log(query)
      query.value = ''  //clear the query
    }

    return {
      reset,
      query,
    }
  },
}
</script>
```

注意console.log可以打印如下

<a href="https://imgur.com/FvnIqUH"><img src="https://i.imgur.com/FvnIqUH.png" title="source: imgur.com" width="400px" /></a>


## 1-2 新增SearchResults.vue

將查訊變數轉到SearchResults.vue  

If you look closely at the setup method, you’ll see that it accepts two arguments.  
props – contains all of the props passed to our component  
context – contains attrs, slots, and emit  

HelloWorld.vue採用:query來傳變數  
```
<SearchResults :query="query" />
```

SearchResults.vue  
```
<script>
import { computed, onMounted } from 'vue'
import titles from '../post-data.json'
export default {
  props:{
    query: String,
  },
  setup(props,context){  
```

###　1-3 Computed Properties

不考慮大小寫，因此採用computed來自動完成  
```
import { computed } from 'vue'

    const filteredTitles = computed(() => {
      return titles.filter(s => s.Name.toLowerCase().includes(props.query.toLowerCase()))
    })
```

Then, we set it up like this, where our computed property accepts a getter method.   
This method will update our computed property whenever one of its dependencies changes.  


未設定style如下
<a href="https://imgur.com/0q1KifW"><img src="https://i.imgur.com/0q1KifW.png" title="source: imgur.com" width="400px" /></a>

設定style如下
<a href="https://imgur.com/Y3LGagz"><img src="https://i.imgur.com/Y3LGagz.png" title="source: imgur.com" width="400px" /></a>

------------

參考來源:  
- [为什么选 Vite][1]  
- [Creating Your First Vue 3 Project - A Vue Tutorial][2]  

[1]:https://cn.vitejs.dev/guide/why.html#the-problems
[2]:https://learnvue.co/tutorials/intro-to-vue-3