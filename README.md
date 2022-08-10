## vue3.0

ref、reactive、toRef、toRefs都属于VUE3中Composition API的新特性

响应式是什么意思？  
- 响应式是指当数据改变后，Vue 会通知到使用该数据的代码。  
例如，视图渲染中使用了数据，数据改变后，视图也会自动更新  


結論:
ref是不会去更改原数据的，ref本质是拷贝原数据，而toRef会修改原数据
ref、reactive数据更新后立马会更新HTML视图
toRef、toRefs更新会后会等下次更新视图的时候更新视图
如果数据是通过toRef创建的，修改值后，数据不会触发视图，会等下次更新视图的时候一起更新

### ref

ref就是把string、Number、Boolean、Symbol类型的数据添加响应式  
接受一个原始值，返回一个具有响应式的对象，具有value属性。  
他的值就是传递的原始值。 修改的话直接修改 xx.value  

如下範例  
name2值會變，但name不會變，因為name2是採用ref, 用xx.value來修改，會自動响应   

範例
```
  let name = 'mika'
  let name2 = ref(name)
  console.log('name =' + name)
  console.log('name2 =' + name2)
  console.log('name2.value =' + name2.value)
  setTimeout(()=>{
    name2.value = 'admin'
    console.log('change name2.value ')
    console.log('name =' + name)
    console.log('name2 =' + name2)
    console.log('name2.value =' + name2.value)
  })
```

輸出
```
name =mika
App.vue:19 name2 =[object Object]
App.vue:20 name2.value =mika
App.vue:23 change name2.value 
App.vue:24 name =mika
App.vue:25 name2 =[object Object]
App.vue:26 name2.value =admin        =>只有name2是ref，所以會跟著變
```

### reactive

ref對像單一值  
reactive對像則 array  

reactive也很好理解，就是傳入對象，把傳入的對像變成響應式的對象。  
增刪改查和深度的增刪改查都會觸發響應式從而改變視圖  

reactive，採用對像不同，**會連採用對像資料一起改變**  

如下範例  
修改people2值，people會跟著變，因為people2採用reactive連結people  

範例  
```
  let people = {name:'mika', age:'22'}
  let people2 = reactive(people)
  console.log('people.name =' + people.name)
  console.log('people2.name2 =' + people2.name)
  console.log('people2.name2.value =' + people2.name.value)
  setTimeout(()=>{
    people2.name = 'admin'
    console.log('=== change people2.name.value ==')
    console.log('people.name =' + people.name)
    console.log('people2.name2 =' + people2.name)
  })
```

輸出
```
people.name =mika
App.vue:19 people2.name2.value =undefined
App.vue:20 people2.name2.value =undefined
App.vue:23 === change people2.name.value ==
App.vue:24 people.name =admin              => 注意跟ref不同地方，這次連參考也是改變
App.vue:25 people2.name2 =admin
App.vue:26 people2.name2.value =undefined
```


### toRef  

toRef是用来给抽离响应式对象（被reactive包裹的对象）中的某一个属性的，  
并且把这个属性包裹成ref对象，使其和原对象产生链接  

toRef採用響應式連接，即值會跟著變動  
當people改變時，people2也會跟著變，因為採用toRef指定其中一個值  


1.改變people.name  
會變: people, people2  
因為toRef是採用連結 ref,ref是採用copy ref  
```
  let people = reactive({name:'mika', age:'22'})
  let people2 = toRef(people,"name")
  let people3 = ref(people.name)
  console.log('people.name =' + people.name)
  console.log('people2.value =' + people2.value)
  console.log('people3.value =' + people3.value)
  setTimeout(()=>{
    people.name = 'admin'
    console.log('-- change people.name')
    console.log('people.name =' + people.name)
    console.log('people2.value =' + people2.value)
    console.log('people3.value =' + people3.value)
  })
```

```
App.vue:19 people.name =mika
App.vue:20 people2.value =mika
App.vue:21 people3.value =mika
App.vue:24 -- change people.name
App.vue:25 people.name =admin
App.vue:26 people2.value =admin
App.vue:27 people3.value =mika
```

2.改變people2.value  
會變:people,people2  

```
  let people = reactive({name:'mika', age:'22'})
  let people2 = toRef(people,"name")
  let people3 = ref(people.name)
  console.log('people.name =' + people.name)
  console.log('people2.value =' + people2.value)
  console.log('people3.value =' + people3.value)
  setTimeout(()=>{
    people2.value = 'admin'
    console.log('-- change people.name')
    console.log('people.name =' + people.name)
    console.log('people2.value =' + people2.value)
    console.log('people3.value =' + people3.value)
  })
```

```
App.vue:19 people.name =mika
App.vue:20 people2.value =mika
App.vue:21 people3.value =mika
App.vue:24 -- change people.name
App.vue:25 people.name =admin
App.vue:26 people2.value =admin
App.vue:27 people3.value =mika
```

3.改變people3.value  
會變:people3  

```
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
```

```
people.name =mika
App.vue:20 people2.value =mika
App.vue:21 people3.value =mika
App.vue:24 -- change people.name
App.vue:25 people.name =mika
App.vue:26 people2.value =mika
App.vue:27 people3.value =admin
```

### toRefs

将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref

- 批量版的toRef
toRef不是只能对象中的一个属性嘛，这个可以直接给你整个对象的属性都一起给整成ref

[1]:https://www.jianshu.com/p/0c171ecb0e2a