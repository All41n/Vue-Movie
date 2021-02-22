<template>
  <v-container fluid>
    <h1 id="discover_title">{{ this.title }}</h1>
    <v-row>
      <v-col v-for="(disc, d) in discover" :key="d.id">
        <Card :items="disc" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '../../../../components/Card'
import { fetchDiscover } from '../../../../tmdb/tmdb'
export default {
  data() {
    return {
      title: this.$route.params.name,
    }
  },
  components: {
    Card,
  },
  async asyncData({ params, error }) {
    try {
      const getDiscover = await fetchDiscover(params.explore, params.id)
      const discover = [...getDiscover.results]
      discover.forEach(function (e) {
        e.media_type = params.explore
      })
      return { discover }
    } catch {
      error({ message: 'Data cannot be accessed!' })
    }
  },
}
</script>

<style>
#discover_title {
  color: #4527a0;
  font-size: 50px;
  text-align: center;
  letter-spacing: 10px;
}

</style>