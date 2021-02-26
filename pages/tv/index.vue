<template>
  <v-container fluid>
    <Featured :items="featured" />
    <v-subheader id="subheading">Action & Adventure</v-subheader>
    <Slidergroups :items="actionadventure" :url="exploreURL('tv','Action & Adventure',10759)"/>
    <v-subheader id="subheading">Trending Now</v-subheader>
    <Slidergroups :items="trending" :url="trendingTVURL('trending')"/>
    <v-subheader id="subheading">Comedy</v-subheader>
    <Slidergroups :items="comedy" :url="exploreURL('tv','Comedy',35)"/>
    <v-subheader id="subheading">Documentary</v-subheader>
    <Slidergroups :items="documentary" :url="exploreURL('tv','Documentary',99)"/>
    <v-subheader id="subheading">Scifi & Fantasy</v-subheader>
    <Slidergroups :items="scififantasy" :url="exploreURL('tv','Scifi & Fantasy',10765)"/>
    <v-subheader id="subheading">Drama</v-subheader>
    <Slidergroups :items="drama" :url="exploreURL('tv','Drama',18)"/>
    <v-subheader id="subheading">Kids</v-subheader>
    <Slidergroups :items="kids" :url="exploreURL('tv','Kids',10762)"/>
  </v-container>
</template>

<script>
import Slidergroups from '../../components/Slidergroups'
import { fetchTrending, fetchTV, fetchDiscover } from '../../tmdb/tmdb'
import Featured from '../../components/Featured'
export default {
  components: {
    Slidergroups,
    Featured,
  },
  methods:{
    exploreURL: function(media,genre,id){
      return {name:'discover-explore-name-id', params:{explore:media, name:genre, id:id}}
    },
    trendingTVURL: function(type){
      return {name: 'tv-trending-trending', params:{trending:type}}
    }
  },
  async asyncData({ error }) {
    try {
      const actionadventure = await fetchDiscover('tv', '10759')
      const comedy = await fetchDiscover('tv', '35')
      const documentary = await fetchDiscover('tv', '99')
      const kids = await fetchDiscover('tv', '10762')
      const scififantasy = await fetchDiscover('tv', '10765')
      const drama = await fetchDiscover('tv', '18')
      const trending = await fetchTrending('tv')

      const featuredShow = [
        ...actionadventure.results,
        ...comedy.results,
        ...documentary.results,
        ...scififantasy.results,
        ...drama.results,
        ...kids.results
      ]
      const randomShow =
        featuredShow[Math.floor(Math.random() * featuredShow.length)]
      const featured = await fetchTV(randomShow.id)

      actionadventure.results.forEach(function (e) {e.media_type = "tv"})
      comedy.results.forEach(function (e) {e.media_type = "tv"})
      documentary.results.forEach(function (e) {e.media_type = "tv"})
      drama.results.forEach(function (e) {e.media_type = "tv"})
      scififantasy.results.forEach(function (e) {e.media_type = "tv"})
      kids.results.forEach(function (e) {e.media_type = "tv"})

      return {
        actionadventure,
        comedy,
        documentary,
        drama,
        scififantasy,
        kids,
        trending,
        featured,
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
</style>