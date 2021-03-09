<template>
  <div>
    <v-app-bar id="appbar-navbar" elevate-on-scroll fixed app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" id="app_title" />
      <v-spacer></v-spacer>
      <v-form ref="form" @submit.prevent>
        <v-text-field
          flat
          dense
          outlined
          clearable
          v-model="search"
          placholder="Search"
          append-icon="mdi-magnify"
          class="hidden-md-and-down"
        ></v-text-field>
      </v-form>

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
                <v-icon class="ma-2 url_icon" size="23"
                  >mdi-calendar-today</v-icon
                >
                Airing Today
              </nuxt-link>
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
      <v-card flat tile :to="{ name: 'index' }" nuxt exact>
        <v-toolbar flat color="rgb(230,230,230)">
          <v-card-title>
            <v-icon class="ma-2" size="30" color="deep-purple darken-4"
              >mdi-home</v-icon
            >
            Home
          </v-card-title>
        </v-toolbar>
      </v-card>
      <!--
        Film Drawer
      -->
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
                      <v-icon color="white" size="39" class="ma-1"
                        >mdi-star</v-icon
                      >
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
      <!--
        Series Drawer
      -->
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
                      <v-icon color="white" size="39" class="ma-1"
                        >mdi-star</v-icon
                      >
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
      tvExpand: false,
      filmsExpand: false,
      model: 1,
      dialog: false,
      search: '',
      searchResults: []
    }
  },
  methods: {
    async searchShows() {}
  }
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
  font-size: 0.9rem;
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
