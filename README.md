## CH1.5 事件處理

#### .self

範例如下  
當自已物件(modal-container)上面還有一層物件(modal-body)  
在物件(modal-container)及物件(modal-body)上面按下Click都會產生 物件(modal-container)的Click事件如下  

<a href="https://imgur.com/kE8XC25"><img src="https://i.imgur.com/kE8XC25.gif" title="source: imgur.com" width="400px" /></a>
 
此時若在物件(modal-container)，只有點選在自已物件上面才會產生事件 
需加入.self如下

```
<template>
  <div class="modal-mask" v-bind:style="modalStyle">
    <div class="modal-container" @click.self="isShow = false">
      <div class="modal-body">Hello!</div>
    </div>
  </div>
  <button @click="isShow = true">Click Me</button>
</template>
``` 

<a href="https://imgur.com/f0lHxBf"><img src="https://i.imgur.com/f0lHxBf.gif" title="source: imgur.com" width="400px" /></a>


其它說明   
[How To use CSS Display All Property Example one by one][3]    
設定display為none表示不顯示  


[1]:https://ithelp.ithome.com.tw/articles/10198999
[2]:https://book.vue.tw/CH1/1-5-events.html
[3]:https://www.myprograming.com/how-to-use-css-display-all-property-example-one-by-one/