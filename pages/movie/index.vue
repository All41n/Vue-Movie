<template>
  <v-container fluid>
    <Featured :items="getFeatured" />
    <Slidergroups
      :items="action"
      :url="exploreURL('movie', 'Action', '28')"
      :title="sliderTitle('Action')"
    />
    <Slidergroups
      :items="trending"
      :url="trendingMovies('movie')"
      :title="sliderTitle('Trending')"
    />
    <Slidergroups
      :items="fantasy"
      :url="exploreURL('movie', 'Fantasy', '14')"
      :title="sliderTitle('Fantasy')"
    />
    <Slidergroups
      :items="animated"
      :url="exploreURL('movie', 'Animated', '16')"
      :title="sliderTitle('Animated')"
    />
    <Slidergroups
      :items="horror"
      :url="exploreURL('movie', 'Horror', '27')"
      :title="sliderTitle('Horror')"
    />
    <Slidergroups
      :items="scifi"
      :url="exploreURL('movie', 'Sci-fi', '878')"
      :title="sliderTitle('Scifi')"
    />
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
      return {
        name: 'discover-explore-name-id',
        params: { explore: media, name: genre, id: id },
      }
    },
    trendingMovies: function (type) {
      return { name: 'discover-media-trending', params: { media: type } }
    },
    sliderTitle(title) {
      return title
    },
  },
  computed: {},
  async asyncData({ error }) {
    try {
      const action = await fetchDiscover('movie', '28')
      const fantasy = await fetchDiscover('movie', '14')
      const animated = await fetchDiscover('movie', '16')
      const horror = await fetchDiscover('movie', '27')
      const scifi = await fetchDiscover('movie', '878')
      const trending = await fetchTrending('movie','week')

      action.results.forEach(function (e) {
        e.media_type = 'movie'
      })
      fantasy.results.forEach(function (e) {
        e.media_type = 'movie'
      })
      animated.results.forEach(function (e) {
        e.media_type = 'movie'
      })
      horror.results.forEach(function (e) {
        e.media_type = 'movie'
      })
      scifi.results.forEach(function (e) {
        e.media_type = 'movie'
      })

      //get single movie for featured
      const mixedGenres = [
        ...action.results,
        ...fantasy.results,
        ...scifi.results,
        ...animated.results,
      ]

      const randomfy =
        mixedGenres[Math.floor(Math.random() * mixedGenres.length)]
      const getFeatured = await fetchMovie(randomfy.id)

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