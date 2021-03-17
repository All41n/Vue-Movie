/**
 * Axios import
 */
import axios from 'axios'

/**
 * fetchMovies function
 * reference: https://www.digitalocean.com/community/tutorials/vuejs-async-computed-properties
 */
export function fetchCollections(media, header, page = 1) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.themoviedb.org/3/${media}/${header}?language=en-US&region=us`,
        {
          params: {
            api_key: process.env.API_KEY,
            page
          }
        }
      )
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * function to fetch list of movies
 */
export function fetchTrending(header, duration) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.themoviedb.org/3/trending/${header}/${duration}`, {
        params: {
          api_key: process.env.API_KEY
        }
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * function to get single
 */
export function fetchDetails(type, header) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${header}?language=en-US&append_to_response=images,videos`,
        {
          params: {
            api_key: process.env.API_KEY
          }
        }
      )
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * function to fetch animated shows using discover link
 */
export function fetchDiscover(header, genre, page = 1) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/${header}?language=en-US&region=gb&sort_by=popularity.desc&include_adult=false&include_video=false`,
        {
          params: {
            api_key: process.env.API_KEY,
            page,
            with_genres: genre
          }
        }
      )
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * get genre list
 */
export function fetchGenres(header) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.themoviedb.org/3/genre/${header}/list?language=en-US`, {
        params: {
          api_key: process.env.API_KEY
        }
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * get cast info
 */
export function fetchPeople(header) {
  return new Promise((resolve, reject) => {
    axios
      .get(` https://api.themoviedb.org/3/person/${header}?language=en-US`, {
        params: {
          api_key: process.env.API_KEY,
          append_to_response:
            'movie_credits,tv_credits,external_ids,images,videos,content_ratings'
        }
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 *  fetchSimilar Shows
 */
export function fetchSimilar(media, id, page = 1) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.themoviedb.org/3/${media}/${id}/similar?language=en-US`,
        {
          params: {
            api_key: process.env.API_KEY,
            page
          }
        }
      )
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}?api_key=<<api_key>>&language=en-US
/**
 * fetch Tv Seasons
 */
export function fetchEpisodes(id, season) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/season/${season}?language=en-US`,
        {
          params: {
            api_key: process.env.API_KEY
          }
        }
      )
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * fetchCredits
 */
export function fetchCredits(media, id) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.themoviedb.org/3/${media}/${id}/credits?language=en-US`,
        {
          params: {
            api_key: process.env.API_KEY
          }
        }
      )
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * fetchCollections
 */
export function fetchBelongto(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.themoviedb.org/3/collection/${id}?language=en-US`, {
        params: {
          api_key: process.env.API_KEY
        }
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * fetchVideos
 */
export function fetchVideos(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
        params: {
          api_key: process.env.API_KEY
        }
      })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

//https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
/**
 * fetchSearch
 */
export function fetchSearch(query, page = 1) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?language=en-US&include_adult=false
        `,
        {
          params: {
            api_key: process.env.API_KEY,
            query,
            page
          }
        }
      )
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
