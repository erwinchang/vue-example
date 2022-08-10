# vue-example

## [How to Pass Props in Vue 3 with Composition API][1]


```
npm init vite my-tailwind-project

```

1 測試
```
cd my-tailwind-project
npm install 
npm run dev --host --port 8088
```

2 install and initialize Tailwind CSS 
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3 新增src/index.css內容如下
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4 修改main.js如下，新增index.css
```
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
```

5 add transition animation component
Install the headlessui/vue in order to access the transition animation component
```
npm install @headlessui/vue
```


### 參考來源

[Install Tailwind CSS with Vue 3 and Vite][2]
[jsfanatik/vue-pass-prop-watcher][3]

[1]:https://medium.com/@wsvuefanatik/how-to-pass-props-in-vue-3-with-composition-api-56325b3af515
[2]:https://tailwindcss.com/docs/guides/vite
[3]:https://github.com/jsfanatik/vue-pass-prop-watcher