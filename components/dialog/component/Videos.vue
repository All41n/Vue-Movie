<template>
  <div id="videos_container" class="pt-4 ma-2">
    <h3>Trailers & More</h3>
    <v-row justify="center" class="ma-0 pa-0" v-if="videos.length > 0">
      <Videoscard v-for="(vid, v) in videos" :key="v" :video="vid" />
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
    }
  },
  components: {
    Videoscard,
  },
  props: {
    showID: {
      type: Number,
      required: false,
    },
  },
  methods: {
    async getVideos() {
      fetchVideos(this.showID).then((items) => {
        this.videos = items.results
      })
    },
  },
  created() {
    this.getVideos()
  },
}
</script>

<style>
</style>