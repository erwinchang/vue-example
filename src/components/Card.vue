<template>
  <div class="card" @click="selectCard" :class="flippedStyles">
    <div class="card-face is-front">
      <img :src="`/img/${value}.png`" :alt="value" />
    </div>
    <div class="card-face is-back"></div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
    name: "Card",
    props: {
        position: {
            type: Number,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        visible: {
            type: Boolean,
            default: false,
        },
        matched: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, context){
        const flippedStyles = computed(() => {
            if (props.visible) {
                return "is-flipped";
            }
        });

        const selectCard = () => {
            context.emit("select-card", {
                position: props.position,
                faceValue: props.value,
            });
        };

        return {
            flippedStyles,
            selectCard,
        };
    },
};
</script>

<style scoped>
.card {
  position: relative;

  transform-style: preserve-3d;
  transition: 0.5s transform ease-in;
}

.card-face {
  position: absolute;

  width: 100%;
  height: 100%;
  border-radius: 0.7em;

  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;

  box-shadow: var(--shadow);
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card-face.is-front {
  background: var(--front);
  color: white;
  transform: rotateY(180deg);
}

img {
  width: 3.4em;
  height: 3.4em;
}

.card-face.is-back {
  background: grey;
  color: var(--light);
}
</style>