<template>
  <v-card id="about_holder" tile color="rgb(230,230,230)">
    <v-card-title>About {{ this.title }}</v-card-title>
    <v-card-subtitle v-if="this.mediatype == 'movie'">
      Director:
      <v-chip
        dark
        pill
        class="ma-1 no_director"
        color="deep-purple darken-3"
        v-if="this.crews.length == 0"
        >No Director found for {{ this.title }}
      </v-chip>
      <nuxt-link
        v-for="(crew, cr) in this.crews"
        :key="cr"
        :to="{
          name: 'discover-credits-name-id',
          params: { name: crew.name, id: crew.id },
        }"
        class="director_found"
      >
        <v-chip
          dark
          pill
          class="ma-1"
          color="deep-purple darken-3"
          v-if="crew.job == 'Director'"
        >
          {{ crew.name }}
        </v-chip>
      </nuxt-link>
    </v-card-subtitle>
    <v-card-subtitle v-if="this.mediatype == 'tv' && this.createdby.length">
      Creator
      <nuxt-link
        v-for="(creator, cr) in this.createdby"
        :key="cr"
        :to="{ name: 'discover-credits-name-id', params: { id: creator.id } }"
      >
        <v-chip small dark pill class="ma-1" color="deep-purple darken-3">
          {{ creator.name }}
        </v-chip>
      </nuxt-link>
    </v-card-subtitle>
    <v-card-subtitle v-if="this.casts.length != 0">
      Cast:
      <nuxt-link
        v-for="(cast, ca) in this.casts.slice(0, 12)"
        :key="ca"
        :to="{
          name: 'discover-credits-name-id',
          params: { name: cast.name, id: cast.id },
        }"
        class="cast_url"
      >
        <v-chip dark pill class="ma-1" color="deep-purple darken-3">
          {{ cast.name }}
        </v-chip>
      </nuxt-link>
    </v-card-subtitle>
    <v-card-subtitle v-if="companies.length">
      Production Companies:
      <!-- <v-img
        v-for="(company, c) in this.companies"
        :key="c"
        :src="logo + company.logo_path"
        width="150"
      ></v-img> -->
      <v-chip
        id="company_chips"
        color="deep-purple darken-3"
        class="company_chips ma-1"
        dark
        pill
        v-for="(company, c) in this.companies"
        :key="c"
      >
        <v-avatar v-if="company.logo_path">
          <v-img :src="logo + company.logo_path" contain></v-img>
        </v-avatar>
        {{ company.name }}
      </v-chip>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      logo: 'https://image.tmdb.org/t/p/w185',
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    casts: {
      type: Array,
      required: false,
    },
    crews: {
      type: Array,
      required: false,
    },
    mediatype: {
      type: String,
      required: true,
    },
    companies: {
      type: Array,
      required: false,
    },
    createdby: {
      type: Array,
      required: false,
    },
  },
}
</script>

<style>
.company_chips {
  pointer-events: none !important;
}

.cast_url {
  /* font-size:10px !important; */
  text-decoration: none;
}

.no_director {
  pointer-events: none !important;
}

.director_found {
  text-decoration: none;
}
</style>
