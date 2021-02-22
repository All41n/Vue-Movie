<template>
  <v-container fluid>
    <Featured :items="getFeatured" />
    <v-subheader id="subheading">Action</v-subheader>
    <Slidergroups :items="action" :url="exploreURL('movie','Action',28)" />
    <v-subheader id="subheading">Trending Now</v-subheader>
    <Slidergroups :items="trending" :url="trendingMovies('trending')" />
    <v-subheader id="subheading">Fantasy</v-subheader>
    <Slidergroups :items="fantasy" :url="exploreURL('movie','Fantasy',14)" />
    <v-subheader id="subheading">Animated</v-subheader>
    <Slidergroups :items="animated" :url="exploreURL('movie','Animated',16)" />
    <v-subheader id="subheading">Horror</v-subheader>
    <Slidergroups :items="horror" :url="exploreURL('movie','Horror',27)" />
    <v-subheader id="subheading">Sci-Fi</v-subheader>
    <Slidergroups :items="scifi" :url="exploreURL('movie','Sci-fi',878)" />
  </v-container>
</template>

<script>
import Slidergroups from '../../components/Slidergroups'
import Featured from '../../components/Featured'
import { fetchMovie, fetchDiscover, fetchTrending } from '../../tmdb/tmdb'

export default {
  components: {
    Slidergroups,
    Featured,
  },
  data() {
    return {}
  },
  methods: {
    exploreURL: function (media, genre, id) {
      return { name: 'discover-explore-name-id', params: {explore:media, name:genre, id: id } }
    },
    trendingMovies: function(type){
      return { name: 'movie-trending-trending', params: {name: type } }
    }
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

      const randomfy =
        mixedGenres[Math.floor(Math.random() * mixedGenres.length)]
      const getFeatured = await fetchMovie(randomfy.id)

      const fantasy = [...getFantasyMovies.results]
      const animated = [...getAnimationMovies.results]
      const horror = [...getHorrorMovies.results]
      const scifi = [...getScifi.results]
      const action = [...getActionMovies.results]
      const trending = [...getTrending.results]

      //Temporary forEach method for the dialog to work.
      action.forEach(function (e) {
        e.media_type = 'movie'
      })
      fantasy.forEach(function (e) {
        e.media_type = 'movie'
      })
      scifi.forEach(function (e) {
        e.media_type = 'movie'
      })
      animated.forEach(function (e) {
        e.media_type = 'movie'
      })
      horror.forEach(function (e) {
        e.media_type = 'movie'
      })

      return {
        action,
        fantasy,
        animated,
        horror,
        scifi,
        getFeatured,
        trending,
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