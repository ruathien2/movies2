export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const api_key = "1eedf5dfe16c81d0a13f5e8c2dbb4efb";
export const backgroundNone =
  "https://img.freepik.com/free-vector/film-strips-frame-isolated-white-background_107791-30336.jpg?t=st=1725252792~exp=1725256392~hmac=65b0392c6f2308e949903c6fd8934b37fd7394fbc390f7c2631726a141e3aedb&w=1380";

const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
const tmdbImageOriginal = "https://image.tmdb.org/t/p/original";
const tmdbVideosYoutube = "https://www.youtube.com/embed";

export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${api_key}`,
  getMovieDetail: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${api_key}`,
  getMovieCasts: (movieId) =>
    `${tmdbEndpoint}/${movieId}/credits?api_key=${api_key}`,
  getMovieVideos: (movieId) =>
    `${tmdbEndpoint}/${movieId}/videos?api_key=${api_key}`,
  getMovieSimilar: (movieId) =>
    `${tmdbEndpoint}/${movieId}/similar?api_key=${api_key}`,
  getMoviePopular: (nextPage) =>
    `${tmdbEndpoint}/popular?api_key=${api_key}&page=${nextPage}`,
  getTotalPages: () => `${tmdbEndpoint}/popular?api_key=${api_key}&total_pages`,
  searchMovies: (filter, nextPage) =>
    `${tmdbEndpointSearch}?api_key=${api_key}&query=${filter}&page=${nextPage}`,
  getApiBanner: () => `${tmdbEndpoint}/upcoming?api_key=${api_key}`,
  getImageOriginal: (backdrop_path) => `${tmdbImageOriginal}/${backdrop_path}`,
  getVideosYoutube: (key) => `${tmdbVideosYoutube}/${key}`,
};
