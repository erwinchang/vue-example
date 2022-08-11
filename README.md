# vue-example

## computed

為何computed只產生一次log?
copmputed會將結果暫存起來，若值沒變，就不會再執行一次

範例
```
<template>
  <p>total {{ subtotalComputed }}</p>
  <p>total {{ subtotalComputed }}</p>
  <p>total {{ subtotalComputed }}</p>
  <p>total {{ subtotalMethods() }}</p>
  <p>total {{ subtotalMethods() }}</p>
  <p>total {{ subtotalMethods() }}</p>
</template>
```

測試
```
[vite] connecting...
client:46 [vite] connected.
App.vue:11 computed
App.vue:17 Methods
App.vue:17 Methods
App.vue:17 Methods
```
