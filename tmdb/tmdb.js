/**
 * Axios import
 */
import axios from 'axios';

/**
 * fetchMovies function
 * reference: https://www.digitalocean.com/community/tutorials/vuejs-async-computed-properties
 */
export function fetchMovies(header) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.themoviedb.org/3/movie/${header}?api_key=fd88cff7f01965be8612902e680dd82c&language=en-US&page=1`)
            .then((response) => { resolve(response.data); })
            .catch((error) => {
                reject(error);
            });
    });
};

/**
 * function to fetch TV Shows
 */
export function fetchTVShows(header) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.themoviedb.org/3/tv/${header}?api_key=fd88cff7f01965be8612902e680dd82c&language=en-US&page=1`)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
    });
}

/**
 * function to fetch list of movies
 */
export function fetchTrending(header) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.themoviedb.org/3/trending/${header}/week?api_key=fd88cff7f01965be8612902e680dd82c`)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
    });
}

/**
 * function to get single
 */
export function fetchMovie(header) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.themoviedb.org/3/movie/${header}?api_key=fd88cff7f01965be8612902e680dd82c&language=en-US&append_to_response=images,videos`)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
    });
}

/**
 * fetch single tv show
 */
export function fetchTV(header) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.themoviedb.org/3/tv/${header}?api_key=fd88cff7f01965be8612902e680dd82c&language=en-US`)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
    });
}


/**
 * function to fetch animated shows using discover link
 */
export function fetchDiscover(header, genre) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.themoviedb.org/3/discover/${header}?api_key=fd88cff7f01965be8612902e680dd82c&language=en-US&region=gb&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
    });
}

/**
 * get genre list
 */
 export function fetchGenres(header){
     return new Promise((resolve, reject)=>{
         axios.get(`https://api.themoviedb.org/3/genre/${header}/list?api_key=fd88cff7f01965be8612902e680dd82c&language=en-US`)
         .then((response)=>{
             resolve(response.data);
         }).catch((error)=>{
             reject(error);
         })
     })
 }