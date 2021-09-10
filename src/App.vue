<template>
  <Header />
  <Gameboard :cardList="cardList" :status="status" @flip-card="flipCard" />
  <Button :newPlayer="newPlayer" @start-new-game="startNewGame" />
  <Footer />
</template>

<script>

import { ref, watch } from "vue";
import createGame from "./features/createGame";
import createDeck from "./features/createDeck";
import rapDeck from "./data/rapDeck.json";
import Header from "./components/Header.vue";
import Gameboard from "./components/Gameboard.vue";
import Button from "./components/Button.vue";
import Footer from "./components/Footer.vue";


export default {
  name: "App",
  components: {
    Header,
    Gameboard,
    Button,
    Footer,
  },
  setup() {
    const { cardList } = createDeck(rapDeck);
    const {
      newPlayer,
      startGame,
      restartGame,
      matchesFound,
      status,
    } = createGame(cardList);
    const userSelection = ref([]);

    const startNewGame = () => {
      if (newPlayer) {
        startGame();
      } else {
        restartGame();
      }
    };

    const flipCard = (payload) => {
      cardList.value[payload.position].visible = true;

      if (userSelection.value[0]) {
        if (
          userSelection.value[0].position === payload.position &&
          userSelection.value[0].faceValue === payload.faceValue
        ){
          return;
        }else {
          userSelection.value[1] = payload;
        }
      } else {
        userSelection.value[0] = payload;
      }
    };

    // check if more than 2 cards selected
    watch(
      userSelection,
      (currentValue) => {
        if(currentValue.length === 2 ){
          const cardOne = currentValue[0];
          const cardTwo = currentValue[1];

          //check if cards match
          if( cardOne.faceValue === cardTwo.faceValue){

            cardList.value[cardOne.position].matched = true;
            cardList.value[cardTwo.position].matched = true;
          } else {
            setTimeout(() => {
              cardList.value[cardOne.position].visible = false;
              cardList.value[cardTwo.position].visible = false;
            }, 1000);
          }
          userSelection.value.length = 0;
        }
      },
      {deep: true}

    );

    return {
      cardList,
      flipCard,
      userSelection,
      status,
      startNewGame,
      newPlayer,
      matchesFound,
    };
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #fdf4ff;
  color: #212529;
  height: 100vh;
}

h1 {
  margin-top: 0;
}
</style>