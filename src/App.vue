<template>
  <div class="app">
    <GamesList :games="games"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { Vue } from "vue-class-component";
import GamesList from './components/GamesList.vue'
import Game from './types/game'

export default defineComponent({
  name: "App",
  components: { GamesList },
  data() {
    return {
      great: "Hellow",
      name: "Deiver",
    };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
  },
  setup(){
    const games = ref<Game[]>([
      {id: 1, title:'loco', description:'Los locos', rate:7, link:'https://picsum.photos/id/1005/600/200'}
    ])

    return { games }
  }
});

</script>

<style>
</style>
