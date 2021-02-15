<template>
  <v-app id="inspire">
    <Showcase :items="gettingRandom" />
    <v-subheader id="page_subheading">Trending This Week</v-subheader>
    <v-subheader id="slider__heading">Movies</v-subheader>
    <Slidegroups :items="movies" />
    <v-subheader id="slider__heading">TV Series</v-subheader>
    <Slidegroups :items="tv" />
  </v-app>
</template>

<script>
import Slidegroups from '../components/Slidergroups'
import Showcase from '../components/Showcase'
import { fetchMovies, fetchTrending } from '../tmdb/tmdb'
/**
 * https://nuxtjs.org/guide/async-data/
 */
export default {
  components: {
    Showcase,
    Slidegroups,
  },
  async asyncData({ error }) {
    try {
      const getPopupar = await fetchMovies('popular')

      //return movies at number n
      const popular = [...getPopupar.results]
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

      const gettingRandom = getRandom(popular, 5)
      const trendingMovies = await fetchTrending('movie')
      const trendingTv = await fetchTrending('tv')
      
      const movies = [...trendingMovies.results]
      const tv = [...trendingTv.results]

      return { gettingRandom, movies, tv }
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