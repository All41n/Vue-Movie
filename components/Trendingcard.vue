<template>
  <div>
    <v-btn
      height="auto"
      width="auto"
      class="modal_btn"
      large
      @click.stop="dialogInfo = true"
    >
      <v-card class="ma-3 trending_card" height="auto" width="150">
        <v-img :src="imgURL + this.items.poster_path"></v-img>
        <v-card-subtitle class="pb-0" id="movie_title">
          {{
            this.items.title ? this.items.title : this.items.name
          }}</v-card-subtitle
        >
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
      imgURL: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
      dialogInfo: false,
    }
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.trending_card {
  background: none !important;
  box-shadow: none !important;
}

#movie_title {
  font-size: 15px;
  color: #212121;
}

.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){
  background: none !important;
}

.v-btn--contained{
  box-shadow: none !important;
}

.v-btn:not(.v-btn--round).v-size--large{
  padding:0px;
}
</style>