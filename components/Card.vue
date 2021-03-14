<template>
  <div>
    <v-card
      v-if="items.media_type == 'movie' || items.media_type == 'tv'"
      :width="responsiveIMGWidth"
      class="ma-2 trending_card"
      @click.stop="dialogInfo = true"
    >
      <img
        class="item_poster"
        height="230"
        :width="responsiveIMGWidth"
        :data-src="
          this.items.poster_path != null
            ? imgURL + this.items.poster_path
            : 'https://via.placeholder.com/150x225/4527a0/FFFFF?text=NUXTFLIX'
        "
        :src="'https://via.placeholder.com/150x225/4527a0/FFFFF?text=NUXTFLIX'"
        :alt="this.items.title ? this.items.title : items.name"
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
      <v-card-subtitle class="show_title white--text">{{
        this.items.title ? this.items.title : items.name
      }}</v-card-subtitle>
      <p class="white--text release">
        {{
          this.items.release_date
            ? this.items.release_date
            : this.items.first_air_date | formatYear
        }}
      </p>
    </v-card>
    <v-card
      class="mt-2 ma-2 deep-purple darken-3"
      :width="responsiveIMGWidth"
      v-if="items.media_type == 'person'"
      nuxt
      exact
      :to="{
        name: 'discover-credits-name-id',
        params: { name: items.name, id: items.id },
      }"
    >
      <img
        :width="responsiveIMGWidth"
        height="230"
        :data-src="
          items.profile_path != null
            ? profile + items.profile_path
            : 'https://via.placeholder.com/150x225/4527a0/FFFFF?text=NUXTFLIX'
        "
        :src="'https://via.placeholder.com/150x225/4527a0/FFFFF?text=NUXTFLIX'"
        :alt="items.name"
        v-lazy-load
      />
      <p class="person_name white--text text-center">{{ items.name }}</p>
      <p class="person_department white--text text-center">
        {{ items.known_for_department }}
      </p>
      <p class="person_rating white--text text-center">
        <v-icon size="20" color="white">mdi-chart-line-variant</v-icon
        >{{ roundRating(items.popularity) }}
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
    Dialog,
  },
  data() {
    return {
      imgURL: 'https://image.tmdb.org/t/p/w342',
      profile: 'https://image.tmdb.org/t/p/w400',
      dialogInfo: false,
    }
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  methods: {
    roundRating(rating) {
      const r = Math.round(rating * 10) / 100
      return r
    },
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
    },
  },
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

.person_name {
  font-size: 1rem !important;
}

.person_department {
  font-size: 1.1rem !important;
}

.person_rating {
  font-size: 1.3rem !important;
}
</style>
