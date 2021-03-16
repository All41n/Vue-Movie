<template>
  <v-card flat tile @click="filmsExpand = !filmsExpand">
    <v-toolbar flat class="film_card">
      <v-card-title
        ><v-icon class="ma-2" size="30" color="deep-purple darken-4"
          >mdi-movie-roll</v-icon
        >Films
        <v-icon
          >mdi-{{ `chevron-${filmsExpand ? 'up' : 'down'}` }}</v-icon
        ></v-card-title
      >
    </v-toolbar>
    <v-expand-transition>
      <v-list v-show="filmsExpand" class="deep-purple darken-4">
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content class="text-center">
              <nuxt-link
                :to="{
                  name: 'movie'
                }"
                class="subnav"
              >
                <v-icon class="ma-1" size="39" color="white"
                  >mdi-folder-information</v-icon
                >
                Index
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'movie', type: 'popular' }
                }"
                class="subnav"
              >
                <v-card-subtitle class="subnav-name subtitle-2">
                  <v-icon color="white" size="39" class="ma-1"
                    >mdi-chart-box</v-icon
                  >
                  Popular
                </v-card-subtitle>
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'discover-media-trending',
                  params: { media: 'movie' }
                }"
                class="subnav"
              >
                <v-card-subtitle class="subnav-name subtitle-2">
                  <v-icon color="white" size="39" class="ma-1"
                    >mdi-chart-line-variant</v-icon
                  >
                  Trending
                </v-card-subtitle>
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'movie', type: 'upcoming' }
                }"
                class="subnav"
              >
                <v-card-subtitle class="subnav-name subtitle-2">
                  <v-icon color="white" size="39" class="ma-1"
                    >mdi-new-box</v-icon
                  >
                  Upcoming
                </v-card-subtitle>
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'movie', type: 'top_rated' }
                }"
                class="subnav"
              >
                <v-card-subtitle class="subnav-name subtitle-2">
                  <v-icon color="white" size="39" class="ma-1">mdi-star</v-icon>
                  Top Rated
                </v-card-subtitle>
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'movie', type: 'now_playing' }
                }"
                class="subnav"
              >
                <v-card-subtitle class="subnav-name subtitle-2">
                  <v-icon size="39" color="white" class="ma-1"
                    >mdi-play-speed</v-icon
                  >
                  Now Playing
                </v-card-subtitle>
              </nuxt-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      filmsExpand: false
    }
  }
}
</script>
