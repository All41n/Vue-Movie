<template>
  <v-container fluid>
    <v-subheader id="page_identifier" class="page_identifier">
      {{ this.$route.params.type | capitalizeFirst }}
    </v-subheader>
    <v-row justify="space-between" class="ma-0 pa-0">
      <Card v-for="(item, i) in collections" :key="i" :items="item" />
    </v-row>
    <client-only>
      <infinite-loading
        spinner="bubbles"
        forceUseInfiniteWrapper="true"
        @infinite="getCollections"
      ></infinite-loading>
    </client-only>
  </v-container>
</template>

<script>
import Card from '../../../../components/Card'
import { fetchCollections } from '../../../../tmdb/tmdb'
export default {
  components: {
    Card,
  },
  data() {
    return {
      collections: [],
      page: 1,
    }
  },
  methods: {
    async getCollections($state) {
      const collect = await fetchCollections(
        this.$route.params.media,
        this.$route.params.type,
        this.page
      ).then((items) => {
        if (items.results.length) {
          this.page++
          this.collections.push(...items.results)
          this.mediaType(this.collections, this.$route.params.media)
          $state.loaded()
        } else {
          $state.complete()
        }
      })
    },
    mediaType: function (arr, media) {
      return arr.forEach(function (e) {
        e.media_type = media
      })
    },
  },
  created() {
    this.getCollections()
  },
}
</script>

<style>
.page_identifier {
  font-size: 30px;
  color: #4527a0 !important;
  font-weight: 800;
}
</style>