<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card
        :elevation="hover ? 8 : 4"
        :class="{ 'on-hover': hover }"
        class="ma-2 deep-purple darken-3 known_for_card"
        @click.stop="dialogInfo = true"
        tile
      >
        <img
          class="known_for_poster"
          width="140"
          :data-src="
            item.poster_path != null
              ? poster + item.poster_path
              : 'https://via.placeholder.com/160x240.png/4527a0/FFFFF?text=NUXTFLIX'
          "
          src="
            https://via.placeholder.com/160x240.png/4527a0/FFFFF?text=NUXTFLIX
          "
          v-lazy-load
        />
        <v-card-subtitle class="known_for_titles white--text">{{
          item.title ? item.title : item.name
        }}</v-card-subtitle>
      </v-card>
    </v-hover>
    <Dialog :visible="dialogInfo" :items="item" @close="dialogInfo = false" />
  </div>
</template>

<script>
import Dialog from '../../components/dialog/Dialog'
export default {
  data() {
    return {
      poster: 'https://image.tmdb.org/t/p/w342',
      dialogInfo: false
    }
  },
  components: {
    Dialog
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.known_for_card {
  width: 140px;
  height: 270px;
}

.known_for_titles {
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
