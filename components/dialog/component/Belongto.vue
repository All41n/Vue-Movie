<template>
  <div class=" pt-4">
    <h3>Part of the {{ this.collections.name }} ({{ this.belongs.length }})</h3>
    <v-row v-if="this.belongs.length <= max" justify="center" class="ma-0 pa-0">
      <Card v-for="(item, i) in belongs" :key="i" :items="item" />
    </v-row>
    <v-row
      v-if="
        this.belongs.length > max
      "
      justify="center"
    >
      <v-slide-group>
        <v-slide-item v-for="(item, i) in belongs" :key="i">
          <Card :items="item" />
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </div>
</template>

<script>
import { fetchBelongto } from '../../../tmdb/tmdb'
export default {
  data() {
    return {
      poster: 'https://image.tmdb.org/t/p/w342',
      belongs: [],
      max: 3,
    }
  },
  components: {
    Card: () => import('../../Card'),
  },
  props: {
    collections: {
      type: Object,
      required: true,
    },
  },
  methods: {
    belongtoCollection() {
      fetchBelongto(this.collections.id).then((items) => {
        this.belongs = items.parts
        this.mediatype(this.belongs, 'movie')
      })
    },
    mediatype: function (arr, media) {
      return arr.forEach(function (e) {
        e.media_type = media
      })
    },
  },
  mounted() {
    this.belongtoCollection()
  },
}
</script>

<style>
</style>