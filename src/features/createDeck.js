import { ref } from 'vue'

const cardList = ref([]);

const initDeck = deckData => {
    deckData.forEach((item) => {
        cardList.value.push({
            value: item,
            variant: 2,
            visible: false,
            position: null,
            matched: false,
        })

        cardList.value.push({
            value: item,
            visible: false,
            position: null,
            matched: false,
        })
      })
}

export default function createDeck(deckData) {
    initDeck(deckData)

    return {
        cardList
    }
}