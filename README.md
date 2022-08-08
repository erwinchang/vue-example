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

------------

參考來源:  
- [为什么选 Vite][1]  
- [Creating Your First Vue 3 Project - A Vue Tutorial][2]  

[1]:https://cn.vitejs.dev/guide/why.html#the-problems
[2]:https://learnvue.co/tutorials/intro-to-vue-3
