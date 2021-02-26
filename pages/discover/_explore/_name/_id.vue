<template>
  <v-container fluid>
    <h3 id="discover_title">{{ this.title }}</h3>
    <v-row justify="center" align="center" class="pt-5">
      <Card v-for="(item, i) in discover" :key="i" :items="item" />
    </v-row>
    <client-only>
      <infinite-loading
        spinner="bubbles"
        forceUseInfiniteWrapper="true"
        @infinite="fetchMore"
      ></infinite-loading>
    </client-only>
  </v-container>
</template>

<script>
import Card from '../../../../components/Card'
import { fetchDiscover } from '../../../../tmdb/tmdb'
export default {
  data() {
    return {
      title: this.$route.params.name,
      media: this.$route.params.explore,
      id: this.$route.params.id,
      discover: [],
      page: 1,
    }
  },
  components: {
    Card,
  },
  methods: {
    // async fetchShows() {
    //   const discover = await fetchDiscover(this.media, this.id, this.page)
    //   this.discover = discover.results
    //   this.insertMediaType(this.discover, this.media)
    // },
    async fetchMore($state) {
      const loadMore = await fetchDiscover(this.media, this.id, this.page).then(
        (items) => {
          if (items.results.length) {
            this.page++
            this.discover.push(...items.results)
            this.insertMediaType(this.discover, this.media)
            $state.loaded()
          } else {
            $state.complete()
          }
        }
      )
    },
    insertMediaType(arr, media) {
      return arr.forEach(function (e) {
        e.media_type = media
      })
    },
  },
  beforCreate() {
    this.fetchMore()
  },
}
</script>

<style>
#discover_title {
  color: #4527a0;
  font-size: 40px;
  text-align: center;
  letter-spacing: 10px;
}
</style>