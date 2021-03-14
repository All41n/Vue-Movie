<template>
  <v-dialog
    v-model="show"
    :width="responsiveVidWidth"
    class="trailer_modal"
    transition="scale-transition"
    color="black"
    @click:outside="stop"
  >
    <v-card color="black" class="video_container">
      <v-btn fixed class="video_dialog_close" icon dark text @click="stop">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <h3 class="white--text trailer_title text-center">{{ this.title }}</h3>
      <client-only>
        <youtube
          host="https://www.youtube-nocookie.com"
          :video-id="video"
          :player-vars="{
            rel: 0,
            autoplay: 1,
            modestbranding: 0,
            loop: 1
          }"
          @ready="ready"
          @ended="ended"
          class="video"
          :player-height="responsiveVidHeight"
          :player-width="responsiveVidWidth"
        />
      </client-only>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      required: true
    },
    visible: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
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
      }
    },
    responsiveVidWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 250
        case 'sm':
          return 350
        case 'md':
          return 550
        case 'lg':
          return 945
        case 'xl':
          return 945
      }
    },
    responsiveVidHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 250
        case 'sm':
          return 250
        case 'md':
          return 350
        case 'lg':
          return 535
        case 'xl':
          return 535
      }
    }
  },
  methods: {
    ready(event) {
      this.player = event.target
      this.player.seekTo(1)
    },
    stop() {
      this.player.stopVideo()
      this.show = false
    },
    ended() {
      this.player.seekTo(1)
    }
  }
}
</script>

<style>
.trailer {
  width: 100%;
  height: 500px;
}

.trailer_title {
  font-size: 1rem;
}

.video_dialog_close {
  color: white;
  background-color: rgb(69, 39, 160) !important;
  margin-top: 5px;
  margin-left: 10px;
  z-index: 10;
}

/* .video {
  pointer-events: none;
} */
</style>
