<template>
  <div>
    <v-card class="ma-2 trending_card" @click.stop="dialogInfo = true">
      <v-img
        class="item_poster"
        width="160"
        :src="
          items.poster_path != null
            ? imgURL + this.items.poster_path
            : 'https://via.placeholder.com/150x250/4527a0/FFFFF?text=NUXTFLIX'
        "
      >
        <v-progress-circular
          :rotate="270"
          :size="50"
          :value="percentage"
          color="amber accent-4"
          >{{ percentage }}
          <v-icon color="amber accent-4" class="percent_sign" size="15"
            >mdi-percent</v-icon
          ></v-progress-circular
        >
      </v-img>
      <v-card-subtitle class="show_title white--text">{{
        items.title ? items.title : items.name
      }}</v-card-subtitle>
      <p class="white--text release">{{items.release_date ? items.release_date : items.first_air_date | formatYear}}</p>
    </v-card>
    <Dialog :visible="dialogInfo" :items="items" @close="dialogInfo = false" />
  </div>
</template>

<script>
import Dialog from '../components/dialog/Dialog'
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      imgURL: 'https://image.tmdb.org/t/p/w342',
      dialogInfo: false,
      overlay: false,
    }
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  computed: {
    percentage() {
      return Math.round((this.items.vote_average / 10) * 100)
    },
  },
}
</script>

<style>
.trending_card {
  background: #4527a0 !important;
  width: 160px;
  height: 320px;
}

#movie_title {
  font-size: 15px;
  color: #212121;
}

.v-slide-group__next,
.v-slide-group__prev {
  min-width: 60px !important;
}

.v-btn--contained {
  box-shadow: none !important;
}

.show_title {
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.release{
  font-size:20px;
  text-align: center;
}
</style>
