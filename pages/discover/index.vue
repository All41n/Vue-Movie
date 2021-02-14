<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col>
        <v-card id="genre_list" height="auto" width="250">
          <v-card>
            <v-expansion-panels accordion>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-card-title>Movie</v-card-title>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list shaped>
                    <v-list-item-group
                      v-model="model"
                      multiple
                      v-for="(movie, m) in movies.genres"
                      :key="m"
                    >
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title v-text="movie.name"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-checkbox
                            :input-value="active"
                            color="deep-purple accent-4"
                          ></v-checkbox>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
          <v-divider></v-divider>
          <v-card><v-card-title>TV Series</v-card-title></v-card>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { fetchGenres } from '../../tmdb/tmdb'
export default {
  data: () => ({}),
  async asyncData({ error }) {
    try {
      const movies = await fetchGenres('movie')
      const series = await fetchGenres('tv')

      return { movies, series }
    } catch {
      error({ message: 'Data cannot be accessed!' })
    }
  },
}
</script>

<style>
.container {
  padding: 0px !important;
}

#genre_list {
  position: fixed;
  top: 50px;
}
</style>