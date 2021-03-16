<template>
  <v-card flat tile @click="tvExpand = !tvExpand">
    <v-toolbar flat class="film_card">
      <v-card-title
        ><v-icon class="ma-2" size="30" color="deep-purple darken-4"
          >mdi-television-classic</v-icon
        >TV Series
        <v-icon
          >mdi-{{ `chevron-${tvExpand ? 'up' : 'down'}` }}</v-icon
        ></v-card-title
      >
    </v-toolbar>
    <v-expand-transition>
      <v-list v-show="tvExpand" class="deep-purple darken-4">
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content class="text-center">
              <nuxt-link
                :to="{
                  name: 'tv'
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
                  params: { media: 'tv', type: 'popular' }
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
                  params: { media: 'tv' }
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
                  params: { media: 'tv', type: 'top_rated' }
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
                  params: { media: 'tv', type: 'airing_today' }
                }"
                class="subnav"
              >
                <v-card-subtitle class="subnav-name subtitle-2">
                  <v-icon size="39" color="white" class="ma-1"
                    >mdi-calendar-today</v-icon
                  >
                  TV Airing Today
                </v-card-subtitle>
              </nuxt-link>
              <nuxt-link
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'tv', type: 'on_the_air' }
                }"
                class="subnav"
              >
                <v-card-subtitle class="subnav-name subtitle-2">
                  <v-icon size="39" color="white" class="ma-1"
                    >mdi-play-speed</v-icon
                  >
                  TV On The Air
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
      tvExpand: false
    }
  }
}
</script>
