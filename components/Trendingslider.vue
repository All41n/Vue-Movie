<template>
  <v-container fluid>
    <v-slide-group v-model="model" class="pa4 movie_slider" next-icon="$next">
      <v-slide-item v-for="(item, i) in items.results" :key="i.id">
        <Trendingcard :items="item" />
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import Trendingcard from '../components/Trendingcard'
export default {
  components: {
    Trendingcard,
  },
  data() {
    return {
      model: null,
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
.v-slide-group__wrapper {
  overflow-x: auto !important;
}

.movie_slider{
  background-color:rgb(230,230,230);
}
</style>