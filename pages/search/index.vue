<template>
  <v-container fluid>
    <div class="header_container">
      <v-btn class="go_back deep-purple darken-3" icon :to="{ name: 'index' }"
        ><v-icon size="20" color="white">mdi-arrow-left</v-icon></v-btn
      >
      <v-subheader class="search_heading"
        >Search results for "{{ this.$route.query.s }}"
      </v-subheader>
    </div>

    <v-row justify="center" class="ma-0 pt-5">
      <Card v-for="(item, i) in searchresults.results" :key="i" :items="item" />
    </v-row>
    <client-only>
      <infinite-loading
        spinner="bubbles"
        forceUseInfiniteWrapper="true"
        @infinite="infiniteScroll"
      ></infinite-loading>
    </client-only>
  </v-container>
</template>

<script>
import Card from '../../components/Card'
import { fetchSearch } from '../../tmdb/tmdb'
export default {
  data() {
    return {
      page: 2 // use page 2 instead of page 1 to prevent duplicate displays
    }
  },
  components: {
    Card
  },

  beforeRouteUpdate(to, from, next) {
    next()
    this.search()
  },
  async asyncData({ query, redirect, error }) {
    try {
      if (query.s) {
        const searchresults = await fetchSearch(query.s, 1)
        return { searchresults }
      } else {
        redirect('/')
      }
    } catch {
      error({ message: 'Whoops! Something went wrong!' })
    }
  },
  methods: {
    // async function to overwrite asyncData items
    async search() {
      const searchResults = await fetchSearch(this.$route.query.s)
      this.searchresults = searchResults
    },
    infiniteScroll($state) {
      try {
        fetchSearch(this.$route.query.s, this.page).then(items => {
          if (items.results.length) {
            this.page += 1
            this.searchresults.results = this.searchresults.results.concat(
              items.results
            )
            $state.loaded()
          } else {
            $state.complete()
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style>
.go_back {
  float: right !important;
}

.search_heading {
  font-size: 25px;
  font-weight: 700;
  color: black !important;
}
</style>
