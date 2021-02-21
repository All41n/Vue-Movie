<template>
  <div>
    <h2 id="section_identifier">More Like "{{ this.title }}"</h2>
    <v-row v-if="this.items.total_results > 0" id="holder">
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
            <v-card-text id="similar_details" class="white--text">{{
              item.title ? item.title : item.name
            }}</v-card-text></v-img
          >

          <v-rating
            id="similar_details"
            readonly
            small
            half-increments
            background-color="deep-purple darken-3"
            color="deep-purple darken-3"
            :value="item.vote_average / 2"
          ></v-rating>
          <v-card-text id="similar_details">{{
            item.release_date ? item.release_date : item.first_air_date| formatYear
          }}</v-card-text>
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
    <v-row v-else-if="this.items.total_results === 0" id="holder">
      <v-col
        ><h4 id="null_message">
          Unable to find similar shows as {{ this.title }}.
        </h4></v-col
      >
    </v-row>
    <v-btn
      color="deep-purple darken-3"
      pink
      id="expand_btn"
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
#similar_details {
  text-align: center;
}

#holder {
  margin: 0px;
}

#section_identifier {
  margin-left: 10px;
}

#expand_btn {
  border-radius: 0px;
  background-color: rgb(69, 39, 160) !important;
  color: white;
  width: 100%;
  height: 50px;
}

#null_message {
  text-align: center;
}
</style>