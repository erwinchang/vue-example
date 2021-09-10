<template>
  <h1>Flip a Card</h1>
  <transition-group tag="section" class="game-board">
    <Card
      v-for="card in cardList"
      :key="`${card.value}-${card.variant}`"
      :value="card.value"
      :visible="card.visible"
      :position="card.position"
      :matched="card.matched"
      @select-card="flipCard"
    />
  </transition-group>
  <h2>{{ status }}</h2>
  <button v-if="newPlayer" @click="startGame" class="button">Start Game</button>
  <button v-else @click="restartGame" class="button">Restart Game</button>
</template>

<script>

import Card from "./components/Card.vue";
import { watch } from "vue";
import createGame from "./features/createGame";
import { ref } from 'vue'

export default {
  name: "App",
  components: {
    Card,
  },
  mounted() {
    this.restartGame();
  },
  setup() {
    const cardList = ref([]);

    const {
      newPlayer,
      restartGame,
      startGame,
      status,
    } = createGame(cardList);

    const userSelection = ref([]);

    const cardItems = [
      "andre3000",
      "lilwayne",
      "snoop",
      "tupac",
      "kanyewest",
      "eminem",
      "pharrell",
      "chance",
    ];

    cardItems.forEach((item) => {
      cardList.value.push({
          value: item,
          variant: 2,
          visible: false,
          position: null,
          matched: false,
      });
      cardList.value.push({
          value: item,
          visible: false,
          position: null,
          matched: false,
      });
    });

    cardList.value = cardList.value.map((card, index) => {
      return {
        ...card,
        position: index,
      };
    });

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
      restartGame,
      newPlayer,
      startGame
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
  padding-top: 3em;
  color: #212529;
  height: 100vh;
}

h1 {
  margin-top: 0;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(6, 8em);
  grid-template-rows: repeat(2, 14em);
  grid-gap: 0.6em;
  justify-content: center;
}

.button {
  background: #212529;
  color: #fff;
  padding: 1em 2em;
}
.shuffle-card-move {
  transition: transform 0.8s ease-in;
}
</style>