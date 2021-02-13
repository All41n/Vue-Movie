<template>
  <v-container fluid>
    <v-subheader class="subheading white--text">Movies</v-subheader>
    <Slidergroups :items="getAnimatedMovies" />
    <v-subheader class="subheading white--text">TV Shows</v-subheader>
    <Slidergroups :items="getAnimatedTvShows" />
  </v-container>
</template>

<script>
import Slidergroups from '../../components/Slidergroups'
import { fetchDiscover } from '../../tmdb/tmdb'
export default {
  components: {
    Slidergroups,
  },
  computed: {},
  async asyncData({ error }) {
    try {
      const getAnimatedMovies = await fetchDiscover('movie', '16')
      const getAnimatedTvShows = await fetchDiscover('tv', '16')

      return { getAnimatedMovies, getAnimatedTvShows }
    } catch {
      error({ message: 'Data cannot be accessed!' })
    }
  },
}
</script>

<style scoped>
.subheading {
  font-size: 20px;
}
</style>