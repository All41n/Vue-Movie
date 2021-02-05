<template>
  <v-carousel
    height="auto"
    width="auto"
    interval="5600"
    hide-delimiter-background
    :show-arrows="false"
    delimiter-icon="mdi-minus"
    vertical-delimiters
  >
    <v-carousel-item v-for="(item, i) in items" :key="i.id">
      <Featured :items="item" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import Featured from '../components/Featured'
export default {
  components: {
    Featured,
  },
  data() {
    return {
      imgURL: 'https://image.tmdb.org/t/p/original',
    }
  },
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style>
</style>