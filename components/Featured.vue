<template>
    <v-img
      class="align-center"
      min-height="auto"
      gradient="to top, rgba(230,230,230,1), rgba(230,230,230,0.4)"
      :src="imgURL + this.items.backdrop_path"
    >
      <h3 class="overview_title">{{
        this.items.title ? this.items.title : this.items.name
      }}</h3>

      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Watch Trailers
            </v-btn>
          </template>
          <v-card>
            <v-toolbar dark>
              <v-btn class="btn_trailer" icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Trailer</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-list> </v-list>
          </v-card>
        </v-dialog>
      </v-row>
    </v-img>
</template>

<script>
export default {
  data() {
    return {
      imgURL: 'https://image.tmdb.org/t/p/original',
      dialog: false,
    }
  },
  props: {
    items: {
      required: true,
    },
  },
}
</script>

<style scoped>
.v-card__text {
  font-size: 20px;
}

.overview_title {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 10px;
  text-transform: uppercase;
  text-align: center;
  color: #4527a0 !important;
}

.v-btn {
  background-color: #4527a0 !important;
}
</style>