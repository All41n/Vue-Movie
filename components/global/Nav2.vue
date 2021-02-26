<template>
  <div>
    <v-app-bar id="appbar-navbar" flat fixed app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" class="app_title" />
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
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        nuxt
        exact
        class="ma-1 hidden-md-and-down"
      >
        <v-icon id="router-icon" class="ma-1">{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      class="hidden-lg-and-up"
      v-model="drawer"
      temporary
      :floating="floating"
      app
    >
      <v-text-field label="Search" single-line filled hide-details></v-text-field>
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
      title: 'Nuxtflix',
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
          to: '/movie',
        },
        {
          icon: 'mdi-television-box',
          title: 'TV',
          to: '/tv',
        },
        {
          icon: 'mdi-folder-multiple-plus',
          title: 'Discover',
          to: '/discover',
        },
        {
          icon: 'mdi-toy-brick',
          title: 'Playground',
          to: '/playground',
        },
      ],
    }
  },
}
</script>

<style>
#router-icon {
  color: #4527a0;
}

.drawer_icon {
  color: #4527a0 !important;
}

.drawer_title {
  color: #4527a0;
}
</style>