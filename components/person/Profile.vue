<template>
  <div class="profile_pictures pt-5">
    <v-container fluid>
      <h3 class="profile_pics_heading">Profiles ({{ pics.length }})</h3>
      <v-row v-if="this.pics.length > max" justify="center" align="center">
        <v-slide-group>
          <v-slide-item v-for="(pic, p) in pics" :key="p">
            <v-hover v-slot:default="{ hover }">
              <template>
                <v-card
                  :href="`https://image.tmdb.org/t/p/original` + pic.file_path"
                  class="ma-3"
                  width="200"
                  target="_blank"
                >
                  <v-img
                    width="200"
                    :src="
                      pic.file_path != null
                        ? profile + pic.file_path
                        : require('../../assets/default_profile.jpg')
                    "
                  ></v-img>
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#4527a0">
                      <v-card-subtitle class="view_overlay white--text"
                        >VIEW</v-card-subtitle
                      >
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-slide-item>
        </v-slide-group>
      </v-row>
      <v-row v-if="this.pics.length <= max" justify="center" align="center">
        <v-col cols="5" md="2" sm="3" v-for="(pic, p) in pics" :key="p">
          <v-hover v-slot:default="{ hover }">
            <template>
              <v-card
                :href="`https://image.tmdb.org/t/p/original` + pic.file_path"
                class="ma-3"
                width="200"
                target="_blank"
              >
                <v-img
                  width="200"
                  :src="
                    pic.file_path != null
                      ? profile + pic.file_path
                      : require('../../assets/default_profile.jpg')
                  "
                ></v-img>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#4527a0">
                    <v-card-subtitle class="view_overlay white--text"
                      >VIEW</v-card-subtitle
                    >
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: 'https://image.tmdb.org/t/p/w400',
      overlay: false,
      max: 12,
    }
  },
  props: {
    pics: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.view_overlay {
  font-size: 1.2rem;
}
</style>
