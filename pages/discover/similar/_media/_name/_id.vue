<template>
  <v-container fluid>
    <v-subheader id="page_heading" class="page_heading pt-5"
      >Similar shows as {{ this.title }}</v-subheader
    >
    <v-row justify="center" class="ma-0 pa-0 pt-3">
      <Card v-for="(item, i) in similar" :key="i" :items="item" />
    </v-row>
    <client-only>
      <infinite-loading
        spinner="bubbles"
        forceUseInfiniteWrapper="true"
        @infinite="getSimilar"
      ></infinite-loading>
    </client-only>
  </v-container>
</template>

<script>
import Card from '../../../../../components/Card'
import { fetchSimilar } from '../../../../../tmdb/tmdb'
export default {
  components: {
    Card
  },
  data() {
    return {
      similar: [],
      page: 1,
      media: this.$route.params.media,
      id: this.$route.params.id,
      title: this.$route.params.name
    }
  },
  methods: {
    async getSimilar($state) {
      const similarShows = await fetchSimilar(
        this.media,
        this.id,
        this.page
      ).then(items => {
        if (items.results.length) {
          this.page++
          this.similar.push(...items.results)
          this.mediaType(this.similar, this.media)
          $state.loaded()
        } else {
          $state.complete()
        }
      })
    },
    mediaType: function(arr, media) {
      return arr.forEach(function(e) {
        e.media_type = media
      })
    }
  },
  created() {
    this.getSimilar()
  }
}
</script>

<style>
.page_heading {
  font-size: 27px;
  font-weight: 700;
  color: black !important;
  /* margin-bottom: -15px; */
}
</style>
