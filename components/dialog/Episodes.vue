<template>
  <div v-if="this.seasons.length">
    <v-subheader id="page_subheading">Episodes List</v-subheader>
    <v-select
      id="season_selector"
      class="season_selector"
      v-model="season_number"
      :items="this.seasons"
      item-text="name"
      item-value="season_number"
      dense
      outlined
      @change="getEpisodes"
    ></v-select>
    <div v-if="episodes">
      <Episodecard
        v-for="(episode, ep) in episodes"
        :key="ep"
        :episodes="episode"
      />
    </div>
    <!-- <p>{{ this.seasons }}</p> -->
  </div>
</template>

<script>
import Episodecard from '../dialog/card/Episodecard'
import { fetchEpisodes } from '../../tmdb/tmdb'
export default {
  data() {
    return {
      season_number: 1,
      episodes: [],
    }
  },
  components: {
    Episodecard,
  },
  props: {
    seriesID: {
      type: Number,
      required: true,
    },
    seasons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getEpisodes() {
      fetchEpisodes(this.seriesID, this.season_number).then((items) => {
        if (items.episodes.length) {
          this.episodes = items.episodes
        } else {
          return
        }
      })
    },
  },
}
</script>

<style>
.season_selector {
  width: 150px;
  position: absolute;
  left: 15px;
}
</style>