<template>
  <div>
    <v-slide-group v-model="model" class="episode_slider" width="600">
      <v-slide-item v-for="(item, i) in items.episodes" :key="i">
        <v-card class="ma-2 episode_card" tile width="250">
          <v-img
            class="episode_still align-end"
            width="auto"
            height="150"
            :src="
              item.still_path != null
                ? stills + item.still_path
                : 'https://via.placeholder.com/1920x1080/4527a0/FFFFF?text=NUXTFLIX'
            "
          >
            <v-card-title class="episode_number"
              >E0{{ item.episode_number }}</v-card-title
            >
          </v-img>
          <v-card-subtitle class="episode_title">{{
            item.name
          }}</v-card-subtitle>
          <v-card-text class="episode_overview_text">
            {{ item.overview | truncate(150) }}
          </v-card-text>
          <v-card-text class="air_date">
            {{ item.air_date | formatYear }}
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
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.episode_number {
  font-size: 20px;
  font-weight: 700;
  color: white !important;
}

.episode_overview_text {
  font-size: 0.9rem;
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
