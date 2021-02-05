<template>
  <v-container fluid>
    <h1>This is mah SWAMP!!!</h1>
    <Slider :items="actionMovies" />
  </v-container>
</template>

<script>
import { fetchDiscover, fetchGenres, fetchMovie } from '../../tmdb/tmdb'
import Slider from '../playground/Slider'
export default {
  components: {
    Slider,
  },
  data:()=>({
    selectedItem: 1
  }),
  async asyncData({ error }) {
    try {
      const actionMovies = await fetchDiscover('movie', '28')
      const getGenreList = await fetchGenres('movie')

      //   const actionArr = [actionMovies.results]
      //   const genreArr = [...getGenreList.results]
      return { actionMovies, getGenreList }
    } catch {
      error({ message: 'Data cannot be accessed!' })
    }
  },
}
</script>

<style>
.content{
  color:white !important;
}
</style>