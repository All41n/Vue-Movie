<template>
  <v-container fluid>
    <!-- <nuxt-link></nuxt-link> -->
    <Slidergroups :items="items" />
  </v-container>
</template>

<script>
import Slidergroups from '../playground/Slidergroups'
export default {
  components: {
    Slidergroups,
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
    // display: {
    //   type: Object,
    //   required: false,
    //   default: function () {
    //     return null
    //   }
    // }
  }
}
</script>

<style scoped>
</style>