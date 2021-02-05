<template>
  <v-dialog v-model="show" max-width="750px">
    <v-card id="dialog">
      <v-img
        id="backgdrop"
        height="auto"
        width="750"
        :src="imgURL3 + this.items.backdrop_path"
        gradient="to top, rgba(230,230,230,1), rgba(230,230,230,0.4)"
      >
        <v-btn class="btn_trailer" icon dark flat @click.stop="show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-img>
      <div class="container mx-auto md:flex px-6">
        <v-img
          id="poster"
          width="250"
          contain
          class="hidden-sm-and-down"
          :src="imgURL2 + this.items.poster_path"
        ></v-img>
      </div>
      <v-row class="mb-6">
        <v-col>
          <v-rating
            :value="this.items.vote_average / 2"
            background-color="purple lighten-3"
            color="purple"
            readonly
            half-increments
          ></v-rating>
          <v-card-title
            >{{ this.items.title ? this.items.title : this.items.name }} |
            {{
              this.items.release_date
                ? this.items.release_date
                : this.items.first_air_date | formatYear
            }}
          </v-card-title>
        </v-col>
        <v-col>
          <v-card-subtitle>
            Genres: <a href="">{{ this.items.genre_ids | all_genres }}</a>
          </v-card-subtitle>
        </v-col>
      </v-row>
      <v-card-text>{{ this.items.overview }}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { fetchGenres, fetchMovie } from '../tmdb/tmdb'
export default {
  component: {},
  data() {
    return {
      imgURL3: 'https://image.tmdb.org/t/p/w780',
      imgURL2: 'https://image.tmdb.org/t/p/w342',
      genres: null,
      loading: false,
      all_genres: null,
    }
  },
  props: {
    visible: {
      type: Boolean,
    },
    items: {
      type: Object,
      required: false,
    },
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      },
    },
  },
}
</script>

<style>
#dialog {
  position: relative;
  background-color: rgb(230, 230, 230);
  overflow-x: hidden;
}

#close {
  color: white;
  background-color: rgb(69, 39, 160);
}

#backdrop {
  position: relative;
}

#poster {
  position: absolute;
  z-index: 9;
  top: 50px;
  /*left:25px; */
}
</style>