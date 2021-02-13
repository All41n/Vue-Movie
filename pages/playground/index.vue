<template>
  <v-container fluid>
    <h1>This is mah SWAMP!!!</h1>
    <v-subheader>Movies</v-subheader>
    <Slider :items="actionMovies" />
    <v-subheader>Drama</v-subheader>
    <Slider :items="drama" />
  </v-container>
</template>

<script>
import { fetchDiscover, fetchGenres} from '../../tmdb/tmdb'
import Slider from '../playground/components/Slider'
export default {
  components: {
    Slider,
  },
  data: () => ({
    selectedItem: 1,
  }),
  async asyncData({ error }) {
    try {
      const getActionMovies = await fetchDiscover('movie', '28')
      const getGenreList = await fetchGenres('tv')
      const getDrama =  await fetchDiscover('tv', '18');

      const drama = [...getDrama.results]
      const actionMovies = [...getActionMovies.results]

      drama.forEach(function(element){
        element.media_type = 'tv'
      })

      actionMovies.forEach(function (element) {
        element.media_type = 'movie'
      })

      return {getGenreList,drama,actionMovies }
    } catch {
      error({ message: 'Data cannot be accessed!' })
    }
  },
  methods:{
  }
}
</script>

<style>
.content {
  color: white !important;
}
</style>