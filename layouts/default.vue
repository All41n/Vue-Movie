<template>
  <v-app light>
    <Nav/>
    <v-content class="app_container">
      <nuxt />
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Nav from '../components/global/Nav'
import Footer from '../components/global/Footer'
export default {
  components: {
    Footer,
    Nav
  },
}
</script>

<style>
</style>
