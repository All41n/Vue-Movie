<template>
  <v-container fluid id="container">
    <template>
      <v-row justify="center" class="d-flex">
        <v-col cols="8" sm="4" md="3">
          <v-card>
            <v-img
              :aspect-ratio="2 / 3"
              :src="
                person.profile_path != null
                  ? profile + person.profile_path
                  : require('../../../../assets/default_profile.jpg')
              "
            ></v-img>
          </v-card>

          <div class="personal_info text-center">
            <v-btn
              depressed
              fab
              color="transparent"
              v-if="person.external_ids.instagram_id"
              :href="
                `https://www.instagram.com/` + person.external_ids.instagram_id
              "
              target="_blank"
            >
              <v-icon size="30">mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              depressed
              fab
              color="transparent"
              v-if="person.external_ids.facebook_id"
              :href="
                `https://www.facebook.com/` + person.external_ids.facebook_id
              "
              target="_blank"
            >
              <v-icon size="30">mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              depressed
              fab
              color="transparent"
              v-if="person.external_ids.twitter_id"
              :href="
                `https://www.twitter.com/` + person.external_ids.twitter_id
              "
              target="_blank"
            >
              <v-icon size="30">mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              depressed
              fab
              color="transparent"
              v-if="person.external_ids.imdb_id"
              :href="`https://www.imdb.com/name/` + person.external_ids.imdb_id"
              target="_blank"
            >
              <v-icon size="30">mdi-web</v-icon>
            </v-btn>
            <v-btn
              depressed
              fab
              color="transparent"
              v-if="person.homepage != null"
              :href="person.homepage"
              target="_blank"
            >
              <v-icon size="30">mdi-link</v-icon>
            </v-btn>
            <!-- <p>{{ person.external_ids }}</p> -->
            <h2 class="section_heading">Personal Info</h2>
            <div>
              <h4 class="info_subheading" v-if="person.known_for_department">
                Known For
              </h4>
              <p>{{ person.known_for_department }}</p>
            </div>
            <div>
              <h4 class="info_subheading" v-if="combined.length">
                Known Credits
              </h4>
              <p>{{ combined.length }}</p>
            </div>
            <div>
              <h4 class="info_subheading" v-if="person.gender">Gender</h4>
              <p>{{ gender(person.gender) }}</p>
            </div>
            <div>
              <h4 class="info_subheading" v-if="person.birthday">Birthdate</h4>
              <p>{{ person.birthday | formatDOB }}</p>
            </div>
            <div>
              <h4 class="info_subheading" v-if="person.place_of_birth">
                Place Of Birth
              </h4>
              <p>{{ person.place_of_birth }}</p>
            </div>
            <div>
              <h4 class="info_subheading" v-if="person.also_known_as.length">
                Also Known As
              </h4>
              <p v-for="(item, i) in person.also_known_as" :key="i">
                {{ item }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="8" md="9" class="text-center">
          <h2 class="person_name">{{ person.name }}</h2>
          <div class="bio pt-3">
            <h4 class="bio_heading" v-if="person.biography">Biography</h4>
            <p class="pt-2 biography">{{ person.biography }}</p>
          </div>
          <div class="known_for">
            <Knownfor :items="combined" />
          </div>
          <div class="profile_pictures" v-if="profile_pics.length">
            <Profile :pics="profile_pics" />
          </div>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import { fetchPeople } from '../../../../tmdb/tmdb'
import Knownfor from '../../../../components/person/Knownfor'
import Profile from '../../../../components/person/Profile'
export default {
  data() {
    return {
      profile: 'https://image.tmdb.org/t/p/w400',
      person_id: this.$route.params.id,
    }
  },
  components: {
    Knownfor,
    Profile,
  },
  async asyncData({ params, error }) {
    try {
      const person = await fetchPeople(params.id)
      const movie_credits = person.movie_credits.cast
      const tv_credits = person.tv_credits.cast

      //Insert media type
      movie_credits.forEach(function (e) {
        e.media_type = 'movie'
      })
      tv_credits.forEach(function (e) {
        e.media_type = 'tv'
      })
      //storing the edited objects
      const combined = [...movie_credits, ...tv_credits]
      const profile_pics = [...person.images.profiles]
      return {
        person,
        combined,
        profile_pics,
        // movie_credits
      }
    } catch {
      error({ message: 'Data cannot be accessed!' })
    }
  },
  methods: {
    gender: function (gender) {
      if (gender == '1') {
        return 'Female'
      } else if (gender == '2') {
        return 'Male'
      }
    },
  },
}
</script>

<style>
#container {
  background-color: white !important;
}

.person_name {
  font-size: 40px;
  font-weight: 700;
}

.bio_heading {
  font-size: 23px;
  font-weight: 500;
}

.biography {
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: grey;
}

.info_subheading {
  font-size: 1.1rem;
  font-weight: 500;
  color: #4527a0;
}
</style>
