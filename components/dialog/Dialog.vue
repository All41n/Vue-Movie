<template>
  <v-dialog v-model="show" max-width="900px">
    <v-card id="dialog" class="item_dialog">
      <v-btn fixed id="close" icon dark text @click.stop="show = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-img
        id="backgdrop"
        class="backdrop"
        height="auto"
        width="900"
        :src="
          this.items.backdrop_path != null
            ? backdrop + this.items.backdrop_path
            : 'https://via.placeholder.com/1920x1080/4527a0/FFFFF?text=NUXTFLIX'
        "
        gradient="to top, rgba(230,230,230,1), rgba(230,230,230,0.4)"
      >
      </v-img>
      <div class="container mx-auto md:flex px-6">
        <v-img
          id="poster"
          width="280"
          contain
          class="poster hidden-sm-and-down"
          :src="
            this.items.poster_path != null
              ? poster + this.items.poster_path
              : 'https://via.placeholder.com/280x400/4527a0/FFFFF?text=NUXTFLIX'
          "
        ></v-img>
      </div>
      <v-row>
        <v-col class="pt-0" cols="12" md="7">
          <span>
            <v-progress-circular
              :rotate="270"
              :size="50"
              :value="percentage"
              class="percentage_rating"
              color="amber accent-4"
              >{{ percentage }}
              <v-icon color="amber accent-4" class="percent_sign" size="15"
                >mdi-percent</v-icon
              ></v-progress-circular
            >
            <p class="user_score_text">User<br />Score</p>
          </span>
          <div class="star_amount">
            <p>
              <v-icon size="45" color="amber darken-4">mdi-star</v-icon>({{
                this.items.vote_average
              }}/10)
            </p>
          </div>
          <div class="star_rating"></div>
          <p class="tagline" v-if="!details.tagline"></p>
          <p class="tagline" v-else-if="details.tagline">
            "{{ details.tagline }}"
          </p>
          <v-card-title id="title">
            {{ this.items.title ? this.items.title : this.items.name }}
          </v-card-title>
          <v-card-subtitle id="runtime" class="runtime">
            {{
              this.items.release_date
                ? this.items.release_date
                : this.items.first_air_date | formatYear
            }}
            {{ details.runtime | formatRuntime }}
          </v-card-subtitle>
          <v-card-text id="overview" class="overview">{{
            this.items.overview
          }}</v-card-text>
        </v-col>

        <v-col>
          <v-card-text>
            Genres:
            <v-chip
              id="genre__chip"
              small
              class="ma-1"
              pill
              dark
              v-for="(genre, g) in details.genres"
              :key="g"
              color="purple darken-2"
            >
              {{ genre.name }}
            </v-chip>
          </v-card-text>
          <v-card-text v-if="this.credits.cast != 0">
            Cast:
            <v-chip
              id="cast_chip"
              small
              class="ma-1 cast_chip"
              pill
              dark
              v-for="(cast, c) in castsToDisplay"
              :key="c"
              color="indigo darken-3"
            >
              {{ cast.name }}
            </v-chip>
          </v-card-text>
          <v-card-text v-else-if="this.credits.cast == 0">
            Cast:
            <v-chip
              small
              class="ma-1 cast_chip"
              pill
              dark
              label
              color="indigo darken-3"
            >
              <v-card-text>
                No cast for {{ this.items.title }} were found.
              </v-card-text>
            </v-chip>
          </v-card-text>
        </v-col>
      </v-row>
      <Episodes
        v-if="this.items.media_type == 'tv'"
        :seasons="this.details.seasons"
        :seriesID="this.details.id"
      />
      <Similar
        :title="this.items.title ? this.items.title : this.items.name"
        :items="similars"
        :id="this.items.id"
        :media="this.items.media_type"
      />
      <Belongto
        v-if="this.details.belongs_to_collection"
        :collections="this.details.belongs_to_collection"
      />
      <Videos :showID="this.items.id" />
      <About
        :title="this.items.title ? this.items.title : this.items.name"
        :casts="credits.cast"
        :crews="this.credits.crew"
        :mediatype="this.items.media_type"
        :companies="this.details.production_companies"
        :createdby="this.details.created_by"
      />
    </v-card>
  </v-dialog>
</template>

<script>
import Similar from '../../components/dialog/component/Similar'
import About from '../../components/dialog/component/About'
import Episodes from '../../components/dialog/component/Episodes'
import Belongto from '../../components/dialog/component/Belongto'
import Videos from '../../components/dialog/component/Videos'
import { fetchDetails, fetchCredits, fetchSimilar } from '../../tmdb/tmdb'
export default {
  components: {
    Similar,
    About,
    Episodes,
    Belongto,
    Videos
  },
  data() {
    return {
      backdrop: 'https://image.tmdb.org/t/p/w780',
      poster: 'https://image.tmdb.org/t/p/w342',
      details: [],
      credits: [],
      similars: []
    }
  },
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    items: {
      type: [Array, Object],
      required: true
    }
  },
  methods: {
    getDetails() {
      fetchDetails(this.items.media_type, this.items.id).then(items => {
        this.details = items
      })
    },
    getCredits() {
      fetchCredits(this.items.media_type, this.items.id).then(items => {
        this.credits = items
      })
    },
    getSimilar() {
      fetchSimilar(this.items.media_type, this.items.id).then(items => {
        this.similars = items
      })
    }
  },
  created() {
    this.getDetails()
    this.getCredits()
    this.getSimilar()
  },
  computed: {
    castsToDisplay() {
      for (let i in this.credits.cast) {
        return this.credits.cast.slice(0, 4)
      }
    },
    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      }
    },
    percentage() {
      return Math.round((this.items.vote_average / 10) * 100)
    }
  }
}
</script>

<style>
#title {
  position: relative;
  left: 15px;
  bottom: 50px;
  font-size: 25px;
}

.item_dialog {
  position: relative;
  background-color: rgb(230, 230, 230) !important;
  overflow-x: hidden;
}

#close {
  color: white;
  background-color: rgb(69, 39, 160) !important;
  margin-top: 5px;
  margin-left: 10px;
  z-index: 10;
}

.backdrop {
  position: relative;
}

.poster {
  position: absolute;
  z-index: 9;
  top: 46px;
  /*left:25px; */
}

.percentage_rating {
  position: relative;
  top: 10px;
  left: 10px;
}

.runtime {
  position: relative;
  /* text-align: center; */
  font-size: 21px;
  font-weight: 450;
  left: 15px;
  bottom: 40px;
  color: black !important;
}

.overview {
  position: relative;
  left: 3px;
  bottom: 40px;
}

.tagline {
  position: relative;
  bottom: 50px;
  left: 20px;
  font-variant: initial;
  font-style: italic;
  font-size: 20px;
}

.user_score_text {
  position: relative;
  left: 65px;
  bottom: 37px;
}

.star_amount {
  position: relative;
  left: 150px;
  bottom: 100px;
}
</style>
