<template>
  <div>
    <v-app-bar id="appbar-navbar" flat fixed app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" id="app_title" />
      <v-spacer></v-spacer>
      <v-text-field
        flat
        hide-details
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
      <v-menu id="movie_menu" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" class="hidden-md-and-down">
            <v-icon class="ma-2 menu_icon" size="23">mdi-filmstrip</v-icon>
            Films
            <v-icon class="ma-2" size="23">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list class="dropdown" width="250">
          <v-list-item>
            <v-list-item-content class="text-center">
              <v-btn
                :to="{
                  name: 'movie'
                }"
                nuxt
                exact
                class="nuxt_url ma-2"
              >
                <v-icon class="ma-2 url_icon" size="23"
                  >mdi-folder-information</v-icon
                >
                Index
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'movie', type: 'popular' }
                }"
                nuxt
                exact
                class="nuxt_url ma-2"
              >
                <v-icon class="ma-2 url_icon" size="23">mdi-chart-line</v-icon>
                Popular
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'movie', type: 'top_rated' }
                }"
                nuxt
                exact
                class="nuxt_url ma-2"
              >
                <v-icon class="ma-2 url_icon" size="23">mdi-star</v-icon>
                Top Rated
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'movie', type: 'now_playing' }
                }"
                nuxt
                exact
                class="nuxt_url ma-2"
              >
                <v-icon class="ma-2 url_icon" size="23">mdi-play-speed</v-icon>
                Now Playing
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'movie', type: 'upcoming' }
                }"
                nuxt
                exact
                class="nuxt_url ma-2"
              >
                <v-icon class="ma-2 url_icon" size="23">mdi-new-box</v-icon>
                Upcoming
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu id="series_menu" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" class="hidden-md-and-down">
            <v-icon class="ma-2 menu_icon" size="23">mdi-filmstrip</v-icon>
            Series
            <v-icon class="ma-2" size="23">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list class="dropdown" width="230">
          <v-list-item>
            <v-list-item-content class="text-center">
              <v-btn
                :to="{
                  name: 'tv'
                }"
                nuxt
                exact
                class="nuxt_url ma-2"
              >
                <v-icon class="ma-2 url_icon" size="23"
                  >mdi-folder-information</v-icon
                >
                Index
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'tv', type: 'popular' }
                }"
                nuxt
                exact
                class="nuxt_url ma-2"
              >
                <v-icon class="ma-1 url_icon" size="23">mdi-chart-line</v-icon>
                Popular
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'tv', type: 'top_rated' }
                }"
                class="nuxt_url ma-2"
              >
                <v-icon class="ma-2 url_icon" size="23">mdi-star</v-icon>
                Top Rated
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'tv', type: 'on_the_air' }
                }"
                nuxt
                exact
                class="nuxt_url ma-1"
              >
                <v-icon class="ma-2 url_icon" size="23">mdi-play-speed</v-icon>
                On The Air
              </v-btn>
              <v-btn
                :to="{
                  name: 'discover-collections-media-type',
                  params: { media: 'tv', type: 'airing_today' }
                }"
                nuxt
                exact
                class="nuxt_url ma-2"
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
      class="hidden-lg-and-up"
      v-model="drawer"
      temporary
      :floating="floating"
      app
    >
      <v-text-field
        label="Search"
        single-line
        filled
        hide-details
      ></v-text-field>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon class="drawer_icon">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="drawer_title">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item> </v-list-item>
      </v-list>
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
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-movie-open',
          title: 'Movies',
          to: '/movie'
        },
        {
          icon: 'mdi-television-box',
          title: 'TV',
          to: '/tv'
        },
        {
          icon: 'mdi-folder-multiple-plus',
          title: 'Discover',
          to: '/discover'
        },
        {
          icon: 'mdi-toy-brick',
          title: 'Playground',
          to: '/playground'
        }
      ]
    }
  }
}
</script>

<style>
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
</style>
