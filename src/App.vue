<template>
  <div class="board">
    <Cell
        v-for="cell in cells.flat(1)"
        :key="cell.id"
        :num="cell.val"
        :shouldShow="cell.isShown"
    />
  </div>
</template>

<script>
import { onMounted, ref } from "vue"
import Cell from "./components/Cell.vue"
import actions from "./helpers/userActions.js"

export default {
  name: 'App',
  components: {
    Cell
  },
  setup() {
    const createCells = getInitialCells();
    const cells = ref(createCells);
    const {
      getLeftHandle,
      getRightHandle,
      getUpHandle,
      getDownHandle,
    } = actions;
    
    const keyUpHandler  = (e) => {
      e.preventDefault();

      //console.log(e.keyCode);
      //up,down,left,right = 38,40,37,39
      switch (e.keyCode){
        case 37:
          getLeftHandle(cells.value);
          break;
        case 38:
          getUpHandle(cells.value);
          break;
        case 39:
          getRightHandle(cells.value);
          break;
        case 40:
          getDownHandle(cells.value);
          break;
      }
    };

    onMounted(() => {
      window.addEventListener("keyup", throtte(keyUpHandler, 200));
    });

    return {
      cells,
    };
  },
};

const getInitialCells = () =>{
  const createCells = [];
  let idCounter = 0;
  for(let i = 0; i < 4; i++){
    createCells[i] = [];
    for(let j = 0; j < 4; j++){
      idCounter++;
      createCells[i][j] = {
        id: idCounter,
        val: 0,
        isShown: false,
      };
    }
  }

  const randomCell = () => createCells[randomIndex()][randomIndex()];
  let initialCells = [];
  for(let i = 0; i < 2; i++) {
    initialCells[i] = randomCell();
  }

  while ( initialCells[0] == initialCells[1]){
    initialCells[1] = randomCell();
  }

  for( let i = 0; i < 2; i++) {
    initialCells[i].val = 2;
    initialCells[i].isShown = true;
  }

  return createCells;
};

const randomIndex = () => Math.floor(Math.random() * 4);

//https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44
const throtte = (fn, delay) => {
  let pre = Date.now();
  return function(...rest) {
    if(Date.now() - pre > delay) {
      fn.apply(this, rest);
      pre = Date.now();
    }
  }
};

</script>
<style >
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #faf8ef;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 450px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bbada0;
  border-radius: 6px;
}
.board {
  width: 430px;
  height: 430px;
  display: grid;
  grid-template-columns: repeat(4, 100px);
  row-gap: 10px;
  column-gap: 10px;
}
</style>