<template>
  <v-card>
    <v-card-title>About {{ this.title }}</v-card-title>
    <v-card-subtitle v-if="this.mediatype == 'movie'">
      Director:
      <v-chip
        small
        dark
        label
        class="ma-1"
        color="deep-purple darken-3"
        v-if="this.crews.length == 0"
        >No Director found for {{ this.title }}
      </v-chip>
      <nuxt-link
        v-for="(crew, cr) in this.crews"
        :key="cr"
        :to="{ name: 'discover-credits-credits', query: { id: crew.id } }"
      >
        <v-chip
          small
          dark
          label
          class="ma-1"
          color="deep-purple darken-3"
          v-if="crew.job == 'Director'"
        >
          {{ crew.name }}
        </v-chip>
      </nuxt-link>
    </v-card-subtitle>
    <v-card-subtitle v-if="this.mediatype == 'tv'">
      Creator:
      <v-chip
        small
        dark
        label
        class="ma-1"
        color="deep-purple darken-3"
        v-if="this.crews.length == 0 || this.crews.length == 1 "
        >No Creator found for {{ this.title }}
      </v-chip>
      <nuxt-link
        v-for="(crew, cr) in this.crews"
        :key="cr"
        :to="{ name: 'discover-credits-credits', query: { id: crew.id } }"
      >
        <v-chip
          small
          dark
          label
          class="ma-1"
          color="deep-purple darken-3"
          v-if="
            crew.job == 'Executive Producer'
              ? crew.job == 'Executive Producer'
              : crew.job == 'Original Series Design' || crew.job == 'Writer'
          "
        >
          {{ crew.name }}
        </v-chip>
      </nuxt-link>
    </v-card-subtitle>
    <v-card-subtitle>
      Cast:
      <v-chip
        small
        dark
        label
        class="ma-1"
        color="deep-purple darken-3"
        v-if="this.casts.length == 0"
      >
        No Cast found for {{ this.title }}</v-chip
      >
      <nuxt-link
        v-for="(cast, ca) in this.casts.slice(0,12)"
        :key="ca"
        :to="{ name: 'discover-credits-credits', query: { id: cast.id } }"
      >
        <v-chip
          small
          dark
          label
          class="ma-1"
          color="deep-purple darken-3"
        >
          {{ cast.name }}
        </v-chip>
      </nuxt-link>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    casts: {
      type: Array,
      required: true,
    },
    crews: {
      type: Array,
      required: true,
    },
    mediatype: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
</style>