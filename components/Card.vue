<template>
  <div>
    <v-card
      :width="responsiveIMGWidth"
      class="ma-2 trending_card"
      @click.stop="dialogInfo = true"
    >
      <img
        class="item_poster"
        height="230"
        :width="responsiveIMGWidth"
        :data-src="
          items.poster_path != null
            ? imgURL + this.items.poster_path
            : 'https://via.placeholder.com/150x225/4527a0/FFFFF?text=NUXTFLIX'
        "
        :src="'https://via.placeholder.com/150x225/4527a0/FFFFF?text=NUXTFLIX'"
        :alt="items.title ? items.title : items.name"
        v-lazy-load
      />
      <v-row justify="center">
        <v-progress-circular
          :rotate="270"
          :size="37"
          :value="percentage"
          color="amber accent-4"
          >{{ percentage }}
          <v-icon color="amber accent-4" class="percent_sign" size="15"
            >mdi-percent</v-icon
          ></v-progress-circular
        >
      </v-row>

      <!--</v-img> -->
      <v-card-subtitle class="show_title white--text">{{
        items.title ? items.title : items.name
      }}</v-card-subtitle>
      <p class="white--text release">
        {{
          items.release_date
            ? items.release_date
            : items.first_air_date | formatYear
        }}
      </p>
    </v-card>
    <Dialog :visible="dialogInfo" :items="items" @close="dialogInfo = false" />
  </div>
</template>

<script>
import Dialog from '../components/dialog/Dialog'
export default {
  name: 'Card',
  components: {
    Dialog
  },
  data() {
    return {
      imgURL: 'https://image.tmdb.org/t/p/w342',
      dialogInfo: false,
      overlay: false
    }
  },
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  computed: {
    percentage() {
      return Math.round((this.items.vote_average / 10) * 100)
    },
    responsiveIMGWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 132
        case 'sm':
          return 140
        case 'md':
          return 145
        case 'lg':
          return 165
        case 'xl':
          return 165
      }
    }
  }
}
</script>

<style>
.trending_card {
  background: #4527a0 !important;
  height: 350px;
}

.v-slide-group__next,
.v-slide-group__prev {
  min-width: 60px !important;
}

.v-btn--contained {
  box-shadow: none !important;
}

.show_title {
  font-size: 1rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.release {
  font-size: 1rem;
  text-align: center;
}

.v-progress-circular__info {
  font-size: 0.7rem;
}
</style>
