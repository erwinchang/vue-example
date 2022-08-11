# [组合式 API (Composition API)][1]

Vue 的组件可以按两种不同的风格书写：选项式 API 和组合式 API。


## 选项式 API (Options API)

- 使用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑
- 例如 data、methods 和 mounted
- 选项所定义的属性都会暴露在函数内部的 this 上，它会指向当前的组件实例

```
<script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      count: 0
    }
  },
```

## 组合式 API (Composition API)

- 通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑
- 在单文件组件SFC中，组合式 API 通常会与 ```<script setup>``` 搭配使用

```
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}
```

## [什么是组合式 API？][2]

- 响应式 API：
例如 ref() 和 reactive()，使我们可以直接创建响应式状态、计算属性和侦听器

- 生命周期钩子：
例如 onMounted() 和 onUnmounted()，使我们可以在组件各个生命周期阶段添加逻辑

组合式 API 是 Vue 3 的内置功能

[1]:https://cn.vuejs.org/guide/introduction.html#api-styles
[2]:https://cn.vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api