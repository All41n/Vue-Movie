<template>
  <v-container fluid>
    <v-slide-group v-model="model" class="pa4 movie_slider" next-icon="$next">
      <v-slide-item class="list_item" v-for="(item, i) in items" :key="i.id">
        <Card class="card__item" :items="item"/>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import Card from '../../playground/components/Card'

export default {
  components: {
    Card,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      model: null,
    }
  },
}
</script>

<style>
.v-slide-group__wrapper {
  overflow-x: auto !important;
}

.v-icon.mdi-chevron-right {
  color: #757575;
  font-size: 50px;
}

.v-icon.mdi-chevron-left {
  color: #757575;
  font-size: 50px;
}

</style>