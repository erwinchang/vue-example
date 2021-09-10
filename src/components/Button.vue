<template>
    <button v-if="newPlayer" @click="startNewGame" class="button">
      Start Game
    </button>
    <button v-else @click="startNewGame" class="button">Restart Game</button>
</template>

<script>
export default {
    name: "Button",
    props:{
        newPlayer: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, ctx) {
        const startNewGame = () => {
            ctx.emit("start-new-game");
        };

        return {
            startNewGame,
        };
    },
};
</script>

<style scoped>
.button {
  background: var(--dark);
  border: none;
  border-radius: 1em;
  color: var(--light);
  padding: 1em 2em;
}
</style>