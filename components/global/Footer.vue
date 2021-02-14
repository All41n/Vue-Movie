<template>
  <v-footer color="purple darken-4" padless>
    <v-col class="text-center footer_items" cols="12">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" href="https://github.com/All41n/Nuxtflix.git" icon>
          <v-icon id="footer_icon" size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      {{ new Date().getFullYear() }} — <strong>&#169; Allain Escobar</strong>
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <v-card-text id="text"
        >The site is designed and built by me. Data used is provided by
        <a href="https://www.themoviedb.org/">TMDB</a></v-card-text
      >
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-github'],
  }),
}
</script>

<style>
.footer_items {
  color: white;
}

#footer_icon {
  color: white !important;
}

#text {
  color: white;
  text-align: center;
}
</style>