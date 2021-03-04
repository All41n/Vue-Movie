<template>
  <v-container fluid>
    <h3 class="pt-3 page_header">Known For ({{ items.length }})</h3>
    <v-slide-group v-model="model" class="pa-4" show-arrows>
      <v-slide-item v-for="(item, i) in this.items" :key="i">
        <Knowncard :item="item" />
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import Knowncard from '../../components/person/Knowncard'
export default {
  data() {
    return {
      model: null
    }
  },
  components: {
    Knowncard
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.page_header {
  font-size: 20px;
  font-weight: 500;
}

/* .known_for_poster {
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
} */
</style>
