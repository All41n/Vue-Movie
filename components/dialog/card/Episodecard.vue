<template>
  <div>
    <v-slide-group v-model="model" class="episode_slider" width="600">
      <v-slide-item v-for="(item, i) in items.episodes" :key="i">
        <v-card class="ma-2 episode_card" tile width="200">
          <img
            class="episode_still align-end"
            width="200"
            height="150"
            :data-src="
              item.still_path != null
                ? stills + item.still_path
                : 'https://via.placeholder.com/1920x1080/4527a0/FFFFF?text=NUXTFLIX'
            "
            :src="
              item.still_path != null
                ? stills + item.still_path
                : 'https://via.placeholder.com/1920x1080/4527a0/FFFFF?text=NUXTFLIX'
            "
            v-lazy-load
          />
          <!-- <v-card-title class="episode_number"
              >E0{{ item.episode_number }}</v-card-title
            >
          </v-img> -->
          <v-row>
            <v-card-subtitle class="episode_title"
              >EO{{ item.episode_number }} {{ item.name }}</v-card-subtitle
            >
          </v-row>

          <v-card-text class="episode_overview_text">
            {{ item.overview }}
          </v-card-text>
          <v-card-text class="air_date">
            {{ item.air_date | formatAirDate }}
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stills: 'https://image.tmdb.org/t/p/w300',
      model: false
    }
  },
  props: {
    items: {
      type: [Array, Object],
      required: true
    }
  },
  computed: {
    responsiveWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 110
        case 'sm':
          return 110
        case 'md':
          return 150
        case 'lg':
          return 250
        case 'xl':
          return 250
      }
    }
  }
}
</script>

<style>
/* .episode_number {
  font-size: 20px;
  font-weight: 700;
  color: white !important;
} */

.episode_card {
  height: 350px;
}

.episode_overview_text {
  font-size: 0.9rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.holder {
  margin: 0px;
}

.v-input__control {
  margin-bottom: -20px;
}

.air_date {
  text-align: center;
}
</style>
