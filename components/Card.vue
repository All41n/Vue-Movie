<template>
  <div>
    <v-btn
      height="auto"
      width="auto"
      class="modal_btn"
      large
      @click.stop="dialogInfo = true"
    >
      <v-card class="card_img" height="auto" width="auto">
        <v-img
          width="auto"
          class="hidden-sm-and-down align-end thum"
          :src="imgURL + items.backdrop_path"
        >
          <v-card-subtitle id="subheader">{{
            items.title ? items.title : items.name
          }}</v-card-subtitle>
        </v-img>
        <v-img
          class="hidden-md-and-up align-end"
          :src="imgURL2 + items.poster_path"
        >
        </v-img>
      </v-card>
    </v-btn>
    <Dialog :visible="dialogInfo" :items="items" @close="dialogInfo = false" />
  </div>
</template>

<script>
import Dialog from '../components/Dialog'
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      imgURL: 'https://image.tmdb.org/t/p/w300',
      imgURL2: 'https://image.tmdb.org/t/p/w185',
      imgURL3: 'https://image.tmdb.org/t/p/w780',
      dialog: false,
      dialogInfo: false,
      mediaType:"tv"
    }
  },
  computed: {},
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.slider.theme--dark.v-card {
  background: none !important;
  box-shadow: none;
}

.card_img:hover {
  box-shadow: 0px 0px 15px 5px rgba(69, 39, 160, 0.8) !important;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(69, 39, 160, 0.7) !important;
  -moz-box-shadow: 0px 0px 15px 5px rgba(69, 39, 160, 0.7) !important;
}

.modal_btn {
  padding: 0px !important;
  margin: 5px;
}

.btn_trailer {
  float: right;
  margin: 5px;
  background-color: rgb(69, 39, 160);
}

.theme--dark.v-card {
  background-color: rgb(33, 33, 33);
}

#subheader{
  color:white;
}
</style>