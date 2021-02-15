<template>
  <v-container fluid>
    
  </v-container>
</template>

<script>
import { fetchGenres } from '../../tmdb/tmdb'
export default {
  data: () => ({}),
  async asyncData({ error }) {
    try {
      const movies = await fetchGenres('movie')
      const series = await fetchGenres('tv')

      return { movies, series }
    } catch {
      error({ message: 'Data cannot be accessed!' })
    }
  },
}
</script>

<style>
.container {
  padding: 0px !important;
}

#genre_holder {
  position:relative;
  top:50px;
  box-shadow: none;
}
</style>