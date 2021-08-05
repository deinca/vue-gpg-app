<template>
  <div class="games">
    <ul>
      <li v-for="game in games" :key="game.id">
        <h2>{{ game.title }}</h2>
        <img :src="game.link"/>
        <p>{{ game.description }}</p>
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from "vue";
// import Game from "@/types/game";
export default defineComponent({
  props: {
    games: {
      required: true,
      type: Array ,
    },
  },
});
</script>

<style scoped>
</style>