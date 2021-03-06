<template>
  <div v-if="this.seasons.length">
    <v-subheader id="page_subheading">Episodes List</v-subheader>
    <v-select
      id="season_selector"
      class="season_selector"
      v-model="defaultSeason.season_number"
      :items="this.seasons"
      item-text="name"
      item-value="season_number"
      dense
      outlined
      v-on:change="getEpisodes"
    ></v-select>
    <div v-if="episodes" class="pt-12">
      <Episodecard :items="episodes" />
    </div>
    <!-- <p>{{ this.seasons }}</p> -->
  </div>
</template>

<script>
import Episodecard from '../../dialog/card/Episodecard'
import { fetchEpisodes } from '../../../tmdb/tmdb'
export default {
  data() {
    return {
      defaultSeason: {
        season_number: 1,
        episode: null
      },
      // season_number: 1,
      episodes: []
    }
  },
  components: {
    Episodecard
  },
  props: {
    seriesID: {
      type: Number,
      required: true
    },
    seasons: {
      type: Array,
      required: true
    }
  },
  methods: {
    getEpisodes() {
      fetchEpisodes(this.seriesID, this.defaultSeason.season_number).then(
        items => {
          this.episodes = items
        }
      )
    }
  },
  created() {
    this.getEpisodes()
  }
}
</script>

<style>
.season_selector {
  width: 150px;
  position: absolute;
  left: 15px;
}

#page_subheading {
  font-size: 20px;
  font-weight: 700;
  color: black !important;
}
</style>
