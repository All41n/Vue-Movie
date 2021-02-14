<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card id="genre_list" class="mx-auto" max-width="300">
          <v-expansion-panels  v-model="panel" accordion>
            <v-expansion-panel v-model="panel" v-for="(item, i) in 5" :key="i">
              <v-expansion-panel-header>Movie</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list shaped>
                  <v-list-item-group v-model="model" multiple>
                    <template v-for="(item, i) in items">
                      <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>

                      <v-list-item
                        v-else
                        :key="`item-${i}`"
                        :value="item"
                        active-class="deep-purple--text text--accent-4"
                      >
                        <template v-slot:default="{ active }">
                          <v-list-item-content>
                            <v-list-item-title
                              v-text="item"
                            ></v-list-item-title>
                          </v-list-item-content>

                          <v-list-item-action>
                            <v-checkbox
                              :input-value="active"
                              color="deep-purple accent-4"
                            ></v-checkbox>
                          </v-list-item-action>
                        </template>
                      </v-list-item>
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ['Dog Photos', 'Cat Photos', '', 'Potatoes', 'Carrots'],
    model: ['Carrots'],
    panel: 0
  }),
}
</script>

<style>
.container {
  padding: 0px !important;
}

#genre_list {
  position: absolute;
  top: 50px;
}
</style>