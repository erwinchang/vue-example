# vue3 example

## ex01

1. 增加Test01.vue

```
<template>
    <div>Title</div>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'Test01',
  props: {
    msg: String
  }
}
</script>

```

2. 修改app.vue

```
<template>
  <Test01 msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Test01 from './components/Test01.vue'

export default {
  name: 'App',
  components: {
    Test01
  }
}
</script>
```

測試如下

<a href="https://imgur.com/hRZ4VQi"><img src="https://i.imgur.com/hRZ4VQi.png" title="source: imgur.com" width="400px" /></a>