<template>
  <section>
    <h2>Games</h2>
    <p>Choose a game below to see screenshots of the gameplay</p>

      <ul class="games">
        <li v-for="game in games" :key="game.id">
          <article>
            <h2>{{ game.name }}</h2>
            <img :src="game.background_image" />
            <footer>
              <p>
                <ul>
                  <li>Released: {{ game.released }}</li>
                  <li>Rating: {{ game.rating }}</li>
                  <li>Genre: {{ game.genres[0].name }} </li>
                  <li> {{ game.tags[2].name }} </li>
                </ul>
              </p>
              <a>Watch Gallery</a>
            </footer>
          </article>
        </li>
      </ul>

  </section>
</template>


<script lang="ts">
import { defineComponent, PropType } from "vue";
// import Game from "@/types/game";

export default defineComponent({
  props: {
    games: {
      required: true,
      type: Array,
    },
  },
});

</script>

<style scoped>
</style>