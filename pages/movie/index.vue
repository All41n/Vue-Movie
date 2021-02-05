<template>
  <v-container fluid>
    <Featured :items="getFeatured" />
    <v-subheader id="subheading">Action</v-subheader>
    <Slider :items="getActionMovies" :genre="getGenreList"/>
    <v-subheader id="subheading">Trending Now</v-subheader>
    <Slider :items="getTrending" />
    <v-subheader id="subheading">Fantasy</v-subheader>
    <Slider :items="getActionMovies" />
    <v-subheader id="subheading">Animated</v-subheader>
    <Slider :items="getAnimationMovies" />
    <v-subheader id="subheading">Horror</v-subheader>
    <Slider :items="getHorrorMovies" />
    <v-subheader id="subheading">Sci-Fi</v-subheader>
    <Slider :items="getScifi" />
    <h1></h1>
  </v-container>
</template>

<script>
import Slider from '../../components/Slider'
import Featured from '../../components/Featured'
import {
  fetchMovie,
  fetchDiscover,
  fetchTrending,
  fetchGenres
} from '../../tmdb/tmdb'

export default {
  components: {
    Slider,
    Featured,
  },
  data() {
    return {}
  },
  computed: {},
  async asyncData({ error }) {
    try {
      const getActionMovies = await fetchDiscover('movie', '28')
      const getFantasyMovies = await fetchDiscover('movie', '14')
      const getAnimationMovies = await fetchDiscover('movie', '16')
      const getHorrorMovies = await fetchDiscover('movie', '27')
      const getScifi = await fetchDiscover('movie', '878')
      const getTrending = await fetchTrending('movie')

      //get single movie for featured
      const mixedGenres = [
        ...getActionMovies.results,
        ...getFantasyMovies.results,
        ...getScifi.results,
        ...getAnimationMovies.results,
      ]

      const getGenreList = await fetchGenres('movie');
      // const genre = getGenreList.results];
      const randomfy =
        mixedGenres[Math.floor(Math.random() * mixedGenres.length)]
      const getFeatured = await fetchMovie(randomfy.id)

      return {
        getActionMovies,
        getFantasyMovies,
        getAnimationMovies,
        getHorrorMovies,
        getScifi,
        getFeatured,
        getTrending,
        getGenreList
      }
    } catch {
      error({ message: 'Data cannot be accessed!' })
    }
  },
}
</script>

<style>
#subheading.v-subheader {
  font-size: 20px;
  background-color: rgb(230, 230, 230) !important;
}

.container {
  padding: 0px !important;
}
/* .divider {
  background-color: rgb(33, 150, 243);
} */
</style>