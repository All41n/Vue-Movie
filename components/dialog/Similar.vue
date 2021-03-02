<template>
  <div>
    <div class="d-flex" v-if="this.items.total_results > 0">
      <nuxt-link
        :to="{
          name: 'discover-similar-media-name-id',
          params: { media: this.media, name: this.title, id: this.id },
        }"
        class="nuxt_link"
      >
        <div class="d-flex">
          <h3 class="nuxt_heading">Similar shows as {{ this.title }}</h3>
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
            class="align-end"
            height="150"
            :src="
              item.backdrop_path != null
                ? IMG + item.backdrop_path
                : require('../../assets/placeholder.png')
            "
          >
            <v-card-text id="item_details" class="item_details white--text">{{
              item.title ? item.title : item.name
            }}</v-card-text></v-img
          >

          <v-rating
            id="item_details"
            readonly
            small
            half-increments
            background-color="deep-purple darken-3"
            color="deep-purple darken-3"
            :value="item.vote_average / 2"
          ></v-rating>
          <v-card-text
            id="item_details"
            v-if="item.release_date != null || item.first_air_date != null"
            >{{
              item.release_date
                ? item.release_date
                : item.first_air_date | formatYear
            }}</v-card-text
          >
          <v-card-text
            id="item_details"
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
import Dialog from '../../components/dialog/Dialog'
export default {
  data() {
    return {
      IMG: 'https://image.tmdb.org/t/p/w780',
      showMore: false,
      limit: 9,
    }
  },
  components: { Dialog },
  props: {
    title: {
      required: true,
    },
    items: {
      type: Object,
      required: true,
    },
    id: {
      required: true,
    },
    media: {
      required: true,
    },
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
  },
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

/* .expand_btn {
  width: 100%;
  border-radius: 0px !important;
  background-color: rgb(69, 39, 160) !important;
  /* background-color: rgb(69, 39, 160) !important; */
/* } */

.null_message {
  text-align: center;
}

.nuxt_link {
  font-size: 25px;
  text-decoration: none;
  color: rgb(69, 39, 160) !important;
}

.nuxt_heading {
  color: black;
  /* margin-left: 5px; */
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

/* .nuxt_link .nuxt_heading::before {
  margin-right: 10px;
  content: '>';
  -webkit-transform: translateX(20px);
  -moz-transform: translateX(20px);
  transform: translateX(20px);
} */

.nuxt_link .nuxt_heading::after {
  font-family: 'Material Design Icons';
  font-size: 18px;
  /* font-weight: 800; */
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
</style>
