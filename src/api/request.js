export const API_KEY = "fd613d4bca71c92a8b31188b46d99ee8"; // TMDBのAPIKeyを入れる

export const requests = {
  feachTrending: `/trending/all/week?api_key=${API_KEY}&sort_by=popularity.descP&region=JP`,
  feachNetflixOriginals: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_networks=213&language=ja-JP&region=JP`,
  feactTopRated: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&language=ja-JP&region=JP`,
  feactNowPlayMovies: `/movie/now_playing?api_key=${API_KEY}&sort_by=popularity.desc&page=1&region=JP`,
  feactUpComingMovies: `/movie/upcoming?api_key=${API_KEY}&sort_by=popularity.desc&language=ja-JP&page=1&region=JP`,
  feactComedyMovies: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=35&language=ja-JP&region=JP`,
  feactRomanceMovies: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10749&language=ja-JP&region=JP`,
  feactDocumentMovies: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=99&language=ja-JP&region=JP`,
  feactPopularMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&region=JP&language=ja-JP&with_original_language=ja`,
};
