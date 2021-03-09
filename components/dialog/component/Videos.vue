<template>
  <div id="videos_container" class="pt-4 ma-2">
    <h3>Trailers & More</h3>
    <v-row justify="center" class="ma-0 pa-0" v-if="videos.length <= max">
      <Videoscard v-for="(vid, v) in videos" :key="v" :video="vid" />
    </v-row>
    <v-row justify="center" class="ma-0 pa-0" v-if="videos.length > max">
      <!-- <h3>No trailers or videos found.</h3> -->
      <v-slide-group model="slide">
        <v-slide-item v-for="(vid, v) in videos" :key="v">
          <Videoscard :video="vid" />
        </v-slide-item>
      </v-slide-group>
    </v-row>
    <v-row justify="center" class="ma-0 pa-0" v-if="videos.length == 0">
      <h3>No trailers or videos found.</h3>
    </v-row>
  </div>
</template>

<script>
import { fetchVideos } from '../../../tmdb/tmdb'
import Videoscard from '../card/Videoscard'
export default {
  data() {
    return {
      videos: [],
      dialog: false,
      max: 3,
      slide: null
    }
  },
  components: {
    Videoscard
  },
  props: {
    showID: {
      type: Number,
      required: false
    }
  },
  methods: {
    async getVideos() {
      fetchVideos(this.showID).then(items => {
        this.videos = items.results
      })
    }
  },
  created() {
    this.getVideos()
  }
}
</script>

<style></style>
