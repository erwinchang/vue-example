import _ from "lodash"
import { computed, ref } from "vue"


export default function createGame(deck) {
    const newPlayer = ref(true)

    const startGame = () => {
        newPlayer.value = false
        restartGame()
    };

    const restartGame = () => {
        deck.value = _.shuffle(deck.value)
  
        deck.value = deck.value.map((card, index) => {
            return { 
                ...card,
                matched: false, 
                position: index, 
                visible: false
            }
        })
    }

    const status = computed(() => {
        if (remainingPairs.value === 0) {
          return "You won!"
        } else {
          return `Remaining Pairs: ${remainingPairs.value}`
        }
    })

    const remainingPairs = computed(() => {
        const remainingCards = deck.value.filter(
          (card) => card.matched === false
        ).length

        return remainingCards / 2
    })    

    return {
        newPlayer,
        restartGame,
        startGame,
        status
    }
}