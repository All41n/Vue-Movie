<template>
  <v-dialog
    v-model="show"
    max-width="850"
    class="trailer_modal"
    transition="scale-transition"
    color="black"
  >
    <v-card color="black">
      <v-toolbar dark color="black">
        <v-btn id="close" icon dark @click.stop="show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Trailer</v-toolbar-title>
      </v-toolbar>
      <v-card-title class="white--text display-1">{{
        this.title
      }}</v-card-title>
      <iframe
        frameborder="0"
        class="trailer"
        :src="trailer"
        allowfullscreen
        allow="autoplay; encrypted-media"
      />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    trailer() {
      return `https://www.youtube.com/embed/${this.video}?autoplay=1`
    },
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
.trailer {
  width: 100%;
  height: 500px;
}
</style>