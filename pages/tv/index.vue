<template>
  <v-container fluid>
    <Featured :items="featured" />
    <v-subheader id="subheading">Action & Adventure</v-subheader>
    <Slidergroups :items="actionadventure" />
    <v-subheader id="subheading">Trending Now</v-subheader>
    <Slidergroups :items="trending" />
    <v-subheader id="subheading">Comedy</v-subheader>
    <Slidergroups :items="comedy" />
    <v-subheader id="subheading">Documentary</v-subheader>
    <Slidergroups :items="documentary" />
    <v-subheader id="subheading">Scifi & Fantasy</v-subheader>
    <Slidergroups :items="scififantasy" />
    <v-subheader id="subheading">Drama</v-subheader>
    <Slidergroups :items="drama" />
    <v-subheader id="subheading">Kids</v-subheader>
    <Slidergroups :items="kids" />
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
  computed: {},
  async asyncData({ error }) {
    try {
      const getActionAdventure = await fetchDiscover('tv', '10759')
      const getComedy = await fetchDiscover('tv', '35')
      const getDocumentary = await fetchDiscover('tv', '99')
      const getKids = await fetchDiscover('tv', '10762')
      const getScififantasy = await fetchDiscover('tv', '10765')
      const getDrama = await fetchDiscover('tv', '18')
      const getSoap = await fetchDiscover('tv', '10766')
      const getTrending = await fetchTrending('tv')

      const featuredShow = [
        ...getActionAdventure.results,
        ...getComedy.results,
        ...getDocumentary.results,
        ...getScififantasy.results,
        ...getDrama.results,
        ...getSoap.results,
      ]
      const randomShow =
        featuredShow[Math.floor(Math.random() * featuredShow.length)]
      const featured = await fetchTV(randomShow.id)

      //Temporary forEach to get the dialog working
      const actionadventure = [...getActionAdventure.results]
      const comedy = [...getComedy.results]
      const documentary = [...getDocumentary.results]
      const drama = [...getDrama.results]
      const scififantasy = [...getScififantasy.results]
      const kids = [...getKids.results]
      const trending = [...getTrending.results]

      actionadventure.forEach(function (e) {e.media_type = "tv"})
      comedy.forEach(function (e) {e.media_type = "tv"})
      documentary.forEach(function (e) {e.media_type = "tv"})
      drama.forEach(function (e) {e.media_type = "tv"})
      scififantasy.forEach(function (e) {e.media_type = "tv"})
      kids.forEach(function (e) {e.media_type = "tv"})

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