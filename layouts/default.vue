<template>
  <v-app light>
    <v-app-bar id="navbar" flat dense fixed collapse-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" class="app_title" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      floating
      app
      id="drawer"
      color="transparent"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon id="drawer_icon">{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title
              id="drawer_name"
              v-text="item.title"
              class="icon__title"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content class="app_container">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      floating: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-movie-open',
          title: 'Movies',
          to: 'movie',
        },
        {
          icon: 'mdi-television-box',
          title: 'TV',
          to: 'tv',
        },
        {
          icon: 'mdi-alpha-a-box',
          title: 'Animations',
          to: 'animated',
        },
        {
          icon: 'mdi-toy-brick',
          title: 'Playground',
          to: 'playground',
        },
      ],
      miniVariant: false,
      title: 'Nuxtflix',
    }
  },
}
</script>

<style>
.app_title.v-toolbar__title {
  font-size: 25px;
  color: #4527a0;
  font-weight: 700;
  letter-spacing: 5px;
}

#appbar_icon {
  color: #4527a0;
}

#drawer_icon {
  color: #4527a0;
}

#drawer_name {
  color: #4527a0;
}

#drawer {
  width:256px !important;
  background-color: white !important;
  height: 256px !important;
  top: 43px !important;
  border-bottom-right-radius: 25px;
}

.v-navigation-drawer__border {
  background-color: none !important;
}

.v-toolbar.v-toolbar--collapsed {
  max-width: 256px !important;
}

.v-toolbar.v-toolbar--collapsed .v-toolbar__title,
.v-toolbar.v-toolbar--collapsed .v-toolbar__extension {
  display: inline !important;
}

.v-application--is-ltr .v-toolbar.v-toolbar--collapsed {
  border-bottom-right-radius: 10px !important;
}

#navbar{
  max-width:300px;
  border-bottom-right-radius: 10px;
}
</style>
