<template>
  <v-container fluid>
    <!-- <nuxt-link></nuxt-link> -->
    <Slidergroups :items="items" />
  </v-container>
</template>

<script>
import Slidergroups from '../../playground/components/Slidergroups'
export default {
  components: {
    Slidergroups,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style scoped>
</style>