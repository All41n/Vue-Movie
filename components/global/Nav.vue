<template>
  <div>
    <v-app-bar id="appbar-navbar" elevate-on-scroll fixed app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" id="app_title" />
      <v-spacer></v-spacer>
      <v-text-field
        flat
        append-icon="mdi-magnify"
        label="Search"
        outlined
        dense
        class="hidden-md-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        id="router-item"
        nuxt
        exact
        :to="{ name: 'index' }"
        class="ma-2 hidden-md-and-down"
      >
        <v-icon id="router-icon" class="ma-2" size="23">mdi-home</v-icon>
        Home
      </v-btn>
      <!-- Film Menu-->
      <v-menu id="movie_menu" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" class="hidden-md-and-down">
            <v-icon class="ma-2 menu_icon" size="23">mdi-movie-roll</v-icon>
            Films
            <v-icon class="ma-2" size="23">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list class="dropdown" width="250">
          <v-list-item>
            <v-list-item-content class="text-center">
              <v-btn
                :to="{
                  name: 'movie',
                }"
                nuxt
                exact
                class="nuxt_url"
                depressed
                plain
              >
                <v-icon class="ma-2 url_icon" size="23"
                  >mdi-folder-information</v-icon
                >
                Index
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'movie', type: 'popular' },
                }"
                nuxt
                exact
                class="nuxt_url"
              >
                <v-icon class="ma-2 url_icon" size="23">mdi-chart-line</v-icon>
                Popular
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'movie', type: 'top_rated' },
                }"
                nuxt
                exact
                class="nuxt_url"
              >
                <v-icon class="ma-2 url_icon" size="23">mdi-star</v-icon>
                Top Rated
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'movie', type: 'now_playing' },
                }"
                nuxt
                exact
                class="nuxt_url"
              >
                <v-icon class="ma-2 url_icon" size="23">mdi-play-speed</v-icon>
                Now Playing
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'movie', type: 'upcoming' },
                }"
                nuxt
                exact
                class="nuxt_url"
              >
                <v-icon class="ma-2 url_icon" size="23">mdi-new-box</v-icon>
                Upcoming
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Series Menu-->
      <v-menu id="series_menu" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" class="hidden-md-and-down">
            <v-icon class="ma-2 menu_icon" size="23"
              >mdi-television-classic</v-icon
            >
            Series
            <v-icon class="ma-2" size="23">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list class="dropdown" width="230">
          <v-list-item>
            <v-list-item-content class="text-center">
              <v-btn
                :to="{
                  name: 'tv',
                }"
                nuxt
                exact
                class="nuxt_url"
              >
                <v-icon class="ma-2 url_icon" size="23"
                  >mdi-folder-information</v-icon
                >
                Index
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'tv', type: 'popular' },
                }"
                nuxt
                exact
                class="nuxt_url"
              >
                <v-icon class="ma-1 url_icon" size="23">mdi-chart-line</v-icon>
                Popular
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'tv', type: 'top_rated' },
                }"
                class="nuxt_url"
              >
                <v-icon class="ma-2 url_icon" size="23">mdi-star</v-icon>
                Top Rated
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'tv', type: 'on_the_air' },
                }"
                nuxt
                exact
                class="nuxt_url"
              >
                <v-icon class="ma-2 url_icon" size="23">mdi-play-speed</v-icon>
                On The Air
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'tv', type: 'airing_today' },
                }"
                nuxt
                exact
                class="nuxt_url"
              >
                <v-icon class="ma-2 url_icon" size="23"
                  >mdi-calendar-today</v-icon
                >
                Airing Today
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      class="hidden-lg-and-up nav_drawer"
      v-model="drawer"
      temporary
      :floating="floating"
      app
    >
      <v-text-field label="Search" single-line filled></v-text-field>
      <v-card flat tile @click="expand = !expand">
        <v-toolbar flat class="film_card">
          <v-card-title
            ><v-icon class="ma-2">mdi-movie-roll</v-icon>Films
            <v-icon
              >mdi-{{ `chevron-${expand ? 'up' : 'down'}` }}</v-icon
            ></v-card-title
          >
        </v-toolbar>
        <v-expand-transition>
          <v-list v-show="expand" class="deep-purple darken-4">
            <v-list-item-group>
              <v-list-item>
                <v-list-item-content class="text-center">
                  <nuxt-link
                    :to="{
                      name: 'discover-collections-media-type',
                      params: { media: 'movie', type: 'popular' },
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
                      params: { media: 'movie' },
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
                      params: { media: 'movie', type: 'Upcoming' },
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
                      params: { media: 'movie', type: 'top_rated' },
                    }"
                    class="subnav"
                  >
                    <v-card-subtitle class="subnav-name subtitle-2">
                      <v-icon color="white" size="39" class="ma-1"
                        >mdi-star</v-icon
                      >
                      Top Rated
                    </v-card-subtitle>
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      name: 'discover-collections-media-type',
                      params: { media: 'movie', type: 'Now Playing' },
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
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'NUXTFLIX',
      drawer: false,
      floating: true,
      // items: [
      //   {
      //     icon: 'mdi-home',
      //     title: 'Home',
      //     to: '/',
      //   },
      //   {
      //     icon: 'mdi-movie-open',
      //     title: 'Movies',
      //     to: '/movie',
      //   },
      //   {
      //     icon: 'mdi-television-box',
      //     title: 'TV',
      //     to: '/tv',
      //   },
      //   {
      //     icon: 'mdi-folder-multiple-plus',
      //     title: 'Discover',
      //     to: '/discover',
      //   },
      //   {
      //     icon: 'mdi-toy-brick',
      //     title: 'Playground',
      //     to: '/playground',
      //   },
      // ],

      expand: false,
      model: 1,
      dialog: false,
    }
  },
}
</script>

<style>
.nav_drawer {
  background-color: rgb(230, 230, 230) !important;
}

.film_expand {
  background-color: rgb(230, 230, 230) !important;
  color: #4527a0 !important;
}

#app_title {
  font-size: 30px;
  color: #4527a0;
  font-weight: 700;
}

#router-icon {
  color: #4527a0;
}

.drawer_icon {
  color: #4527a0 !important;
}

.drawer_title {
  color: #4527a0;
}

.nuxt_url {
  background-color: none !important;
  color: white !important;
  text-decoration: none;
}

.menu_icon {
  color: #4527a0 !important;
}

.url_icon {
  color: white !important;
}

.dropdown {
  background-color: #4527a0 !important;
}

.subnav {
  text-decoration: none;
}

.subnav-name {
  color: white !important;
}

.film_card {
  background-color: rgb(230, 230, 230) !important;
}
</style>
