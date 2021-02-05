<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-card-title>{{ this.items.title }}</v-card-title>
      <v-card-text>{{ this.items.overview }}</v-card-text>
      <v-card-text>{{ this.items.genre_ids }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="show = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { fetchMovie } from '../../tmdb/tmdb'
export default {
  component: {},
  props: {
    visible: {
      type: Boolean,
    },
    items: {
      type: Object,
      required: false,
    },
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      },
    },
  },
  methods: {},
 
  data() {
    return {
      genres: null,
    }
  },
}
</script>

<style>
</style>