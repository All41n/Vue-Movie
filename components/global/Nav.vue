<template>
  <div>
    <v-app-bar id="appbar-navbar" elevate-on-scroll fixed app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" id="app_title" />
      <v-spacer></v-spacer>
      <Search />
      <v-btn
        id="router-item"
        nuxt
        exact
        :to="{ name: 'index' }"
        class="ma-2 hidden-sm-and-down"
      >
        <v-icon id="router-icon" class="ma-2" size="23">mdi-home</v-icon>
        Home
      </v-btn>
      <genre-menu
        v-if="
          $vuetify.breakpoint.lgOnly ||
            $vuetify.breakpoint.xlOnly ||
            $vuetify.breakpoint.mdOnly
        "
      />
      <!-- Film Menu-->
      <film-menu />
      <!-- Series Menu-->
      <series-menu />
    </v-app-bar>
    <v-navigation-drawer
      class="hidden-lg-and-up nav_drawer"
      v-model="drawer"
      temporary
      :floating="floating"
      app
    >
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
      <v-card flat tile>
        <v-toolbar flat color="rgb(230,230,230)">
          <genre-menu />
        </v-toolbar>
      </v-card>

      <film-drawer />
      <!--
        Series Drawer
      -->
      <series-drawer />
    </v-navigation-drawer>
  </div>
</template>

<script>
import FilmMenu from './menus/Film-menu'
import SeriesMenu from './menus/Series-menu'
import Search from '../global/search/Search'
import FilmDrawer from './drawers/Film-drawer'
import SeriesDrawer from './drawers/Series-drawer'
import GenreMenu from './genres/Genre-menu'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      title: 'NUXTFLIX',
      drawer: false,
      floating: true,
      tvExpand: false,
      filmsExpand: false,
      model: 1
    }
  },
  components: {
    Search,
    FilmMenu,
    SeriesMenu,
    FilmDrawer,
    SeriesDrawer,
    GenreMenu
  },
  methods: {
    ...mapState(['displaySearch'])
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
