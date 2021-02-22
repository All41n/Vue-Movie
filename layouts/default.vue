<template>
  <v-app light>
    <Nav2/>
    <v-content class="app_container">
      <nuxt />
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Nav from '../components/global/Nav'
import Nav2 from '../components/global/Nav2'
import Footer from '../components/global/Footer'
export default {
  components: {
    Footer,
    Nav,
    Nav2
  },
}
</script>

<style>
.v-application{
  overflow-x: hidden;
}
</style>
