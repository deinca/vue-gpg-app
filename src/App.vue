<template>
  <main class="app">
    <GamesList :games="games" />
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import GamesList from './components/GamesList.vue'
// import Game from './types/game'


export default defineComponent({
  name: "App",
  components: { GamesList },
  data() {
    return {
      games: []
    };
  },
  mounted() {
    fetch(
      "https://api.rawg.io/api/games?key=c73433c137764cfcb5fc789d1d008a79"
    )
      .then(function (response) {
        return response.json();
      })
      .then(data => {
        this.games = data.results
        console.log(data.results)
        });
  }
});
</script>

<style>
</style>
