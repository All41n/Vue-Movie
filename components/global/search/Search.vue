<template>
  <div>
    <v-btn v-if="!displaySearch" icon>
      <v-icon @click="toggleSearchBar">mdi-magnify</v-icon>
    </v-btn>
    <v-text-field
      v-if="displaySearch"
      v-model.trim="query"
      type="text"
      name="search"
      id="search"
      filled
      solo
      flat
      dense
      outlined
      placeholder="Search for movies, tv show or person"
      append-icon="mdi-chevron-right"
      prepend-inner-icon="mdi-magnify"
      full-width
      clearable
      @click:append="toggleSearchBar"
      @keyup="goToRoute"
    >
    </v-text-field>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    ...mapState(['displaySearch'])
  },
  methods: {
    ...mapActions(['toggleSearchBar']),
    goToRoute() {
      if (this.query) {
        this.$router.push({
          name: 'search',
          query: { s: this.query }
        })
      } else {
        this.$router.push({ name: this.$router.currentRoute.name })
      }
    }
  }
}
</script>

<style></style>
