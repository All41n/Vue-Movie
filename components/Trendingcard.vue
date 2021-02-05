<template>
  <v-card class="ma-3 trending_card" height="auto" width="auto">
    <v-img :src="imgURL + this.items.poster_path"></v-img>
    <v-card-subtitle class="pb-0" id="movie_title">
      {{
        this.items.title ? this.items.title : this.items.name
      }}</v-card-subtitle
    >
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      imgURL: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
    }
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.trending_card {
  background: none !important;
  box-shadow: none !important;
}

#movie_title {
  font-size: 15px;
  color: #212121;
}
</style>