<template>
  <v-container fluid>
    <Featured :items="featured" />
    <v-subheader id="subheading">Action & Adventure</v-subheader>
    <Slider :items="actionAdventure" />
    <v-subheader id="subheading">Trending Now</v-subheader>
    <Slider :items="trendingTV" />
    <v-subheader id="subheading">Comedy</v-subheader>
    <Slider :items="comedy" />
    <v-subheader id="subheading">Documentary</v-subheader>
    <Slider :items="documentary" />
    <v-subheader id="subheading">Scifi & Fantasy</v-subheader>
    <Slider :items="scififantasy" />
    <v-subheader id="subheading">Drama</v-subheader>
    <Slider :items="drama" />
    <v-subheader id="subheading">Soap</v-subheader>
    <Slider :items="soap" />
    <v-subheader id="subheading">Kids</v-subheader>
    <Slider :items="kids" />
  </v-container>
</template>

<script>
import Slider from '../../components/Slider'
import { fetchTrending, fetchTV, fetchDiscover } from '../../tmdb/tmdb'
import Featured from '../../components/Featured'
export default {
  components: {
    Slider,
    Featured,
  },
  computed: {},
  async asyncData({ error }) {
    try {
      const actionAdventure = await fetchDiscover('tv', '10759')
      const comedy = await fetchDiscover('tv', '35')
      const documentary = await fetchDiscover('tv', '99')
      const kids = await fetchDiscover('tv', '10762')
      const scififantasy = await fetchDiscover('tv', '10765')
      const drama = await fetchDiscover('tv', '18')
      const soap = await fetchDiscover('tv', '10766')
      const trendingTV = await fetchTrending('tv')

      const featuredShow = [
        ...actionAdventure.results,
        ...comedy.results,
        ...documentary.results,
        ...scififantasy.results,
        ...drama.results,
        ...soap.results,
      ]
      const randomShow =
        featuredShow[Math.floor(Math.random() * featuredShow.length)]
      const featured = await fetchTV(randomShow.id)

      return {
        actionAdventure,
        comedy,
        documentary,
        drama,
        scififantasy,
        soap,
        kids,
        trendingTV,
        featured,
      }
    } catch {
      error({ message: 'Data cannot be accessed!' })
    }
  },
}
</script>

<style>
#subheading {
  font-size: 20px;
  padding: 0px;
  color: rgb(69, 39, 160);
}

.container {
  padding: 0px !important;
}
</style>