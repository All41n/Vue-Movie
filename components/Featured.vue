<template>
  <div>
    <v-img
      class="align-center"
      min-height="auto"
      gradient="to top, rgba(230,230,230,1), rgba(230,230,230,0.4)"
      :src="
        this.items.backdrop_path != null
          ? imgURL + this.items.backdrop_path
          : 'https://via.placeholder.com/1920x1080/4527a0/FFFFF?text=NUXTFLIX'
      "
    >
      <h3 class="overview_title">
        {{ this.items.title ? this.items.title : this.items.name }}
      </h3>

      <v-row justify="center">
        <v-progress-circular
          class="user_rating"
          :rotate="270"
          :size="70"
          :width="10"
          :value="percentage"
          color="amber accent-4"
        >
          {{ percentage }} %
        </v-progress-circular>
      </v-row>
      <v-row justify="center" class="pt-2">
        <v-btn @click.stop="dialogInfo = true"> View Details </v-btn>
      </v-row>
    </v-img>
    <Dialog :visible="dialogInfo" :items="items" @close="dialogInfo = false" />
  </div>
</template>

<script>
import Dialog from '../components/dialog/Dialog'
export default {
  data() {
    return {
      imgURL: 'https://image.tmdb.org/t/p/original',
      dialogInfo: false,
    }
  },
  components: {
    Dialog,
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

<style scoped>
.v-card__text {
  font-size: 20px;
}

.overview_title {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 10px;
  text-transform: uppercase;
  text-align: center;
  color: #4527a0 !important;
}

.v-btn {
  background-color: #4527a0 !important;
}
</style>
