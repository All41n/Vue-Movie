<template>
  <v-dialog v-model="dialog" tile fullscreen>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        depressed
        plain
        class="black--text"
        text
        dark
        v-bind="attrs"
        v-on="on"
      >
        <v-icon :size="responsiveSize" class="ma-2" color="deep-purple darken-3"
          >mdi-folder</v-icon
        >
        Genres
      </v-btn>
    </template>

    <v-card tile>
      <v-toolbar tile flat>
        <v-btn
          fab
          class="deep-purple darken-3"
          icon
          dark
          @click="dialog = false"
        >
          <v-icon color="white">mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title class="deep-purple--text  display-2"
          >NUXTFLIX</v-toolbar-title
        >
      </v-toolbar>
      <v-subheader class="ml-4 black--text headline"
        >Browse Movie Genres</v-subheader
      >
      <v-row justify="center" class="ma-2">
        <v-col v-for="(movie, m) in movies" :key="m" cols="6" md="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="ma-2 deep-purple darken-3"
                flat
                shaped
                nuxt
                exact
                :to="{
                  name: 'discover-explore-name-id',
                  params: {
                    explore: movie.media_type,
                    name: movie.name,
                    id: movie.id
                  }
                }"
                @click="dialog = false"
              >
                <v-card-subtitle class="ma-2  subtitle-1 white--text">
                  <v-avatar size="45">
                    <span class="amber--text">{{ movie.name | truncate }}</span>
                  </v-avatar>
                  {{ movie.name }}
                </v-card-subtitle>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="white"> </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <!-- <GCard v-for="(movie, m) in movies" :key="m" :genre="movie" /> -->
        <!-- <p>{{ movies }}</p> -->
      </v-row>
      <v-divider class="black"></v-divider>
      <v-subheader class="ml-4 black--text headline"
        >Browse Series Genres</v-subheader
      >
      <v-row justify="center" class="ma-2">
        <v-col v-for="(series, s) in series" :key="s" cols="6" md="3">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="ma-2 deep-purple darken-3"
                flat
                shaped
                nuxt
                exact
                :to="{
                  name: 'discover-explore-name-id',
                  params: {
                    explore: series.media_type,
                    name: series.name,
                    id: series.id
                  }
                }"
                @click="dialog = false"
              >
                <v-card-subtitle
                  class="ma-2  subtitle-1 white--text text-center"
                >
                  <v-avatar size="45">
                    <span class="amber--text">{{
                      series.name | truncate
                    }}</span>
                  </v-avatar>
                  {{ series.name }}
                </v-card-subtitle>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="white"> </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
      <!-- <p>{{ movies }}</p> -->
    </v-card>
  </v-dialog>
</template>

<script>
import { fetchGenres } from '../../../tmdb/tmdb'
export default {
  data() {
    return {
      movies: [],
      series: [],
      dialog: false
    }
  },
  components: {},
  methods: {
    async movieGenres() {
      const movies = await fetchGenres('movie')
      this.movies = movies.genres
      this.media(this.movies, 'movie')
    },
    async seriesGenres() {
      const series = await fetchGenres('tv')
      this.series = series.genres
      this.media(this.series, 'tv')
    },
    media(arr, type) {
      //   return (arr['media_type'] = type)
      return arr.forEach(function(media) {
        media.media_type = type
      })
    }
  },
  computed: {
    responsiveSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 30
        case 'sm':
          return 30
        case 'md':
          return 23
        case 'lg':
          return 23
        case 'xl':
          return 23
      }
    }
  },
  created() {
    this.movieGenres()
    this.seriesGenres()
  }
}
</script>

<style>
.logo {
  text-align: center !important;
}
</style>
