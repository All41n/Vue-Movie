<template>
  <div id="videos_card_container">
    <v-hover v-slot:default="{ hover }">
      <template>
        <v-card
          flat
          class="ma-2"
          color="rgb(230,230,230)"
          :width="responsiveThumbnail"
          @click.stop="videoDialog = true"
        >
          <v-img :width="responsiveThumbnail" :src="thumbnail"></v-img>
          <v-card-subtitle class="video_name">{{ video.name }}</v-card-subtitle>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#4527a0">
              <v-icon size="40">mdi-youtube</v-icon>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
    <Fullscreen
      :visible="videoDialog"
      :video="this.video.key"
      :title="video.name"
      @close="videoDialog = false"
    />
  </div>
</template>

<script>
import Fullscreen from '../fullscreen/fullscreendialog'
export default {
  data() {
    return {
      videosArr: [],
      videoDialog: false,
    }
  },
  components: {
    Fullscreen,
  },
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
  computed: {
    thumbnail() {
      return `https://img.youtube.com/vi/${this.video.key}/0.jpg`
    },
    responsiveThumbnail() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 130
        case 'sm':
          return 130
        case 'md':
          return 140
        case 'lg':
          return 150
        case 'xl':
          return 150
      }
    },
  },
}
</script>

<style>
.video_name {
  font-size: 17px;
  color: black !important;
}
</style>