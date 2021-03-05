<template>
  <div>
    <div class="d-flex pt-3" v-if="this.items.total_results > 0">
      <nuxt-link
        :to="{
          name: 'discover-similar-media-name-id',
          params: { media: this.media, name: this.title, id: this.id }
        }"
        class="nuxt_link"
      >
        <div class="d-flex">
          <h3 class="nuxt_heading hidden-md-and-down">
            Similar shows as {{ this.title }}
          </h3>
          <h3 class="hidden_nuxt_link hidden-lg-and-up">
            Simimlar shows as {{ this.title }}
            <span class="explore_all_text"
              >Explore All<v-icon class="small_screen_icon" size="25"
                >mdi-chevron-right</v-icon
              ></span
            >
          </h3>
        </div>
      </nuxt-link>
    </div>
    <div class="d-flex" v-else-if="this.items.total_results == 0">
      <h3 class="nuxt_heading">Similar shows as {{ this.title }}</h3>
    </div>

    <v-row v-if="this.items.total_results > 0" id="holder" class="holder">
      <v-col
        cols="12"
        sm="4"
        md="4"
        v-for="(item, i) in this.items.results.slice(0, limit)"
        :key="i"
      >
        <v-card>
          <v-img
            height="150"
            :src="
              item.backdrop_path != null
                ? IMG + item.backdrop_path
                : 'https://via.placeholder.com/1920x1080/4527a0/FFFFF?text=NUXTFLIX'
            "
          >
            <v-progress-circular
              :rotate="270"
              :size="45"
              :value="percentage(item.vote_average)"
              color="yellow darken-2"
              >{{ percentage(item.vote_average) }}
              <v-icon color="yellow darken-2" class="percent_sign" size="15"
                >mdi-percent</v-icon
              ></v-progress-circular
            >
          </v-img>
          <v-card-text id="item_details" class="item_title black--text">{{
            item.title ? item.title : item.name
          }}</v-card-text>
          <v-card-text
            class="item_details"
            v-if="item.release_date != null || item.first_air_date != null"
            >{{
              item.release_date
                ? item.release_date
                : item.first_air_date | formatYear
            }}</v-card-text
          >
          <v-card-text
            class="item_details"
            v-if="item.release_date == null && item.first_air_date == null"
            >Coming Soon!</v-card-text
          >
          <v-expansion-panels id="expansion_overview" accordion>
            <v-expansion-panel>
              <v-expansion-panel-header>Overview</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-card-text>{{ item.overview }}</v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      v-else-if="this.items.total_results === 0"
      id="holder"
      class="holder"
    >
      <v-col
        ><h4 id="null_message" class="null_message">
          Unable to find similar shows as {{ this.title }}.
        </h4></v-col
      >
    </v-row>
    <v-btn
      v-if="this.items.results.length == limit"
      nuxt
      exact
      :to="{
        name: 'discover-similar-media-name-id',
        params: { media: this.media, name: this.title, id: this.id }
      }"
    >
      Explore All
    </v-btn>
    <v-btn
      id="expand_btn"
      class="expand_btn"
      :style="{ left: '50%', transform: 'translateX(-50%)' }"
      v-if="this.items.results.length > 6"
      @click="expand"
    >
      {{ showMore ? 'Show Less' : 'Show More' }}
    </v-btn>
  </div>
</template>

<script>
import Dialog from '../../../components/dialog/Dialog'
export default {
  data() {
    return {
      IMG: 'https://image.tmdb.org/t/p/w780',
      showMore: false,
      limit: 9
    }
  },
  components: { Dialog },
  props: {
    title: {
      required: true
    },
    items: {
      type: Object,
      required: true
    },
    id: {
      required: true
    },
    media: {
      required: true
    }
  },
  methods: {
    expand() {
      this.showMore = !this.showMore
      if (this.limit == 9) {
        this.limit = this.items.results.length
      } else if (this.limit == this.items.results.length) {
        this.limit = 9
      }
    },
    percentage(vote) {
      return Math.round((vote / 10) * 100)
    }
  },
  computed: {}
}
</script>

<style>
.null_message {
  text-align: center;
}

.item_details {
  text-align: center;
}

.holder {
  margin: 0px;
}

#expand_btn {
  border-radius: 0px;
  background-color: rgb(69, 39, 160) !important;
  color: white !important;
  width: 100%;
  height: 50px;
}

.null_message {
  text-align: center;
}

.nuxt_link {
  font-size: 25px;
  text-decoration: none;
  color: rgb(69, 39, 160) !important;
}

.nuxt_heading {
  color: #4527a0;
  font-weight: 700;
  font-size: 25px;
}

.nuxt_link .nuxt_heading::before,
.nuxt_link .nuxt_heading::after {
  display: inline-block;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
  -moz-transition: -moz-transform 0.3s, opacity 0.2s;
  transition: transform 0.3s, opacity 0.2s;
}

.nuxt_link .nuxt_heading::after {
  font-family: 'Material Design Icons';
  font-size: 18px;
  margin-left: 10px;
  content: 'Explore All \F0142';
  -webkit-transform: translateX(-20px);
  -moz-transform: translateX(-20px);
  transform: translateX(-20px);
}

.nuxt_link .nuxt_heading:hover::before,
.nuxt_link .nuxt_heading:hover::after,
.nuxt_link .nuxt_heading:hover::before,
.nuxt_link .nuxt_heading:hover::after {
  opacity: 1;
  -webkit-transform: translateX(0px);
  -moz-transform: translateX(0px);
  transform: translateX(0px);
}

.item_title {
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.hidden_nuxt_link {
  font-size: 20px;
}

.explore_all_text {
  margin-left: 10px;
  font-size: 15px;
  color: black;
}

.small_screen_icon {
  margin-left: -5px;
  margin-top: -3px;
  color: black !important;
}
</style>
