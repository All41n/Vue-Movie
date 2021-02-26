<template>
  <v-app id="inspire">
    <Showcase :items="gettingRandom" />
    <v-subheader id="page_heading" >Trending This Week</v-subheader>
    <Slidegroups :items="movies" :url="trendingMoviesURL('movie')" :title="sliderTitle('Trending Movies')"/>
    <Slidegroups :items="tv" :url="trendingTVURL('tv')" :title="sliderTitle('Trending Tv Series')"/>
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
  methods: {
    trendingMoviesURL: function (media) {
      return { name: 'movie-trending-trending', params: { name: media } }
    },
    trendingTVURL: function (media) {
      return { name: 'tv-trending-trending', params: { name: media } }
    },
    sliderTitle(title){
      return title
    }
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
      const movies = await fetchTrending('movie')
      const tv = await fetchTrending('tv')

      // const movies = [...trendingMovies.results]
      // const tv = [...trendingTv.results]

      return { gettingRandom, movies, tv }
    } catch {
      error({ message: 'Data cannot be accessed!' })
    }
  },
}
</script>

<style scoped>
#inspire {
  overflow-y: auto;
  background-color: rgb(230, 230, 230);
}

#page_heading {
  font-size: 30px;
  color: #4527a0;
  margin-bottom: 10px;
  /* background-color: rgb(230, 230, 230); */
}

</style>