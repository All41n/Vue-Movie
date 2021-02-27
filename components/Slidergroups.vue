<template>
  <v-container fluid>
    <nuxt-link :to="url" class="nuxt_link hidden-md-and-down">
      <div class="title_holder d-flex">
        <h3 class="nuxt_heading">
          {{ this.title }}
        </h3>
      </div>
    </nuxt-link>
    <nuxt-link :to="url" class="hidden_link hidden-lg-and-up">
      <div class="title_holder d-flex">
        <h3 class="hidden_subheading">
          {{ this.title }}
        </h3>
        <v-icon class="hidden_icon_link" size="33">mdi-chevron-right</v-icon>
      </div>
    </nuxt-link>
    <v-slide-group v-model="model" class="pa4 movie_slider" next-icon="$next">
      <v-slide-item v-for="(item, i) in items.results" :key="i.id">
        <Card :items="item" />
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import Card from '../components/Card'
export default {
  components: {
    Card,
  },
  data() {
    return {
      model: null,
    }
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
    url: {
      type: Object,
      required: true,
    },
    title: {
      required: false,
    },
  },
}
</script>

<style>
.hidden_link {
  font-size: 25px;
  text-decoration: none;
  color: black !important;
}

.hidden_subheading {
  margin-left: 25px;
  font-weight: 700;
}

.hidden_icon_link {
  color: black !important;
}

.v-slide-group__wrapper {
  overflow-x: auto !important;
}

.movie_slider {
  background-color: rgb(230, 230, 230);
}

.nuxt_link {
  font-size: 25px;
  text-decoration: none;
  color: rgb(69, 39, 160) !important;
}

.theme--light.v-application {
  background-color: rgb(230, 230, 230) !important;
}

.title_holder {
  margin-top: 20px;
  margin-bottom: -5px;
}

.nuxt_heading {
  margin-left: 25px;
  font-weight: 700;
}

.nuxt_link .nuxt_heading::before,
.nuxt_link .nuxt_heading::after {
  display: inline-block;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.5s, opacity 0.4s;
  -moz-transition: -moz-transform 0.5s, opacity 0.4s;
  transition: transform 0.5s, opacity 0.4s;
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