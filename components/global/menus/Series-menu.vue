<template>
  <v-menu id="series_menu" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" class="hidden-sm-and-down">
        <v-icon class="ma-2 menu_icon" size="23">mdi-television-classic</v-icon>
        Series
        <v-icon class="ma-2" size="23">mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list class="dropdown" width="163">
      <v-list-item>
        <v-list-item-content>
          <nuxt-link
            :to="{
              name: 'tv'
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
              params: { media: 'tv', type: 'popular' }
            }"
            class="nuxt_url"
          >
            <v-icon class="ma-2 url_icon" size="23">mdi-chart-line</v-icon>
            Popular
          </nuxt-link>
          <nuxt-link
            :to="{
              name: 'discover-collections-media-type',
              params: { media: 'tv', type: 'top_rated' }
            }"
            class="nuxt_url"
          >
            <v-icon class="ma-2 url_icon" size="23">mdi-star</v-icon>
            Top Rated
          </nuxt-link>
          <nuxt-link
            :to="{
              name: 'discover-collections-media-type',
              params: { media: 'tv', type: 'on_the_air' }
            }"
            class="nuxt_url"
          >
            <v-icon class="ma-2 url_icon" size="23">mdi-play-speed</v-icon>
            On The Air
          </nuxt-link>
          <nuxt-link
            :to="{
              name: 'discover-collections-media-type',
              params: { media: 'tv', type: 'airing_today' }
            }"
            class="nuxt_url"
          >
            <v-icon class="ma-2 url_icon" size="23">mdi-calendar-today</v-icon>
            Airing Today
          </nuxt-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {}
</script>
