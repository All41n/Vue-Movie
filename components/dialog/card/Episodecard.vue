<template>
  <v-card id="episode_card" class="episode_card">
      <v-card-title>{{this.episodes}}</v-card-title>
 </v-card>
</template>

<script>
import {fetchEpisodes} from '../../../tmdb/tmdb'
export default {
    data(){
        return{
        }
    },
    props:{
        episodes:{
            type:Object,
            required:true,
        }
    },
  
}
</script>

<style>
</style>