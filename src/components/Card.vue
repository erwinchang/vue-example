<template>
    <div class="card" @click="selectCard" :class="flippedStyles">
        <div v-if="visible" class="card-face is-front">
            {{ value }} - {{ position }} - {{ matched }}
        </div>
        <div v-else class="card-face is-back"></div>
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
            } else {
                return "console";
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
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card-face.is-front {
  background: red;
  color: white;
  transform: rotateY(180deg);
}

.card-face.is-back {
  background: grey;
  color: white;
}
</style>