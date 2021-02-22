<template>
  <div>
    <v-app-bar
      id="appbar-navbar"
      flat
      fixed
      app
    >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Nuxtflix',
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
</style>