<template>
  <v-menu id="movie_menu" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" class="hidden-sm-and-down">
        <v-icon class="ma-2 menu_icon" size="23">mdi-movie-roll</v-icon>
        Films
        <v-icon class="ma-2" size="23">mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list class="dropdown" width="156">
      <v-list-item>
        <v-list-item-content>
          <nuxt-link
            :to="{
              name: 'movie'
            }"
            class="nuxt_url"
          >
            <v-icon class="ma-2 url_icon" size="23"
              >mdi-folder-information</v-icon
            >
            Index
          </nuxt-link>
          <nuxt-link
            :to="{
              name: 'discover-collections-media-type',
              params: { media: 'movie', type: 'popular' }
            }"
            class="nuxt_url"
          >
            <v-icon class="ma-2 url_icon" size="23">mdi-chart-line</v-icon>
            Popular
          </nuxt-link>
          <nuxt-link
            :to="{
              name: 'discover-collections-media-type',
              params: { media: 'movie', type: 'upcoming' }
            }"
            class="nuxt_url"
          >
            <v-icon class="ma-2 url_icon" size="23">mdi-new-box</v-icon>
            Upcoming
          </nuxt-link>
          <nuxt-link
            :to="{
              name: 'discover-collections-media-type',
              params: { media: 'movie', type: 'top_rated' }
            }"
            class="nuxt_url"
          >
            <v-icon class="ma-2 url_icon" size="23">mdi-star</v-icon>
            Top Rated
          </nuxt-link>
          <nuxt-link
            :to="{
              name: 'discover-collections-media-type',
              params: { media: 'movie', type: 'now_playing' }
            }"
            class="nuxt_url"
          >
            <v-icon class="ma-2 url_icon" size="23">mdi-play-speed</v-icon>
            Now Playing
          </nuxt-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {}
</script>

<style></style>
