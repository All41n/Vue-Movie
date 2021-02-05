<template>
  <v-app id="inspire">
    <Showcase :items="gettingRandom" />
    <!-- <p>{{gettingRandom}}</p> -->
    <v-subheader id="page_subheading">Trending This Week</v-subheader>
    <v-subheader id="slider__heading">Movies</v-subheader>
    <Trendingslider :items="trendingMovies" />
    <v-subheader id="slider__heading">TV Series</v-subheader>
    <Trendingslider :items="trendingTv" />
  </v-app>
</template>

<script>
import Trendingslider from '../components/Trendingslider'
import Showcase from '../components/Showcase'
import { fetchMovies, fetchTrending } from '../tmdb/tmdb'
/**
 * https://nuxtjs.org/guide/async-data/
 */
export default {
  components: {
    Showcase,
    Trendingslider,
  },
  async asyncData({ error }) {
    try {
      const movies = await fetchMovies('popular')

      //return movies at number n
      const movielist = [...movies.results]
      const returnLimit = []
      const getRandom = (arr, num = 1) => {
        for (let i = 0; i < num; ) {
          const random = Math.floor(Math.random() * arr.length)
          if (returnLimit.indexOf(arr[random]) !== -1) {
            continue
          }
          returnLimit.push(arr[random])
          i++
        }
        return returnLimit
      }

      const gettingRandom = getRandom(movielist, 5)
      const trendingMovies = await fetchTrending('movie')
      const trendingTv = await fetchTrending('tv')
      return { gettingRandom, trendingMovies, trendingTv }
    } catch {
      error({ message: 'Data cannot be accessed!' })
    }
  },
}
</script>

<style scoped>
#inspire {
  position: relative;
  overflow-y: auto;
  background-color: rgb(230, 230, 230);
}

#page_subheading {
  font-size: 25px;
  color: #4527a0;
  margin-bottom: 10px;
  /* background-color: rgb(230, 230, 230); */
}

#slider__heading {
  font-size: 20px;
  color: #4527a0;
  /* background-color: rgb(230, 230, 230); */
}
</style>