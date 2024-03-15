export const popularMoviesSelector = (state) => {
  // console.log(state.movies.popular.movies);
  return state.movies.popular.movies;
}

export const nowPlayingMoviesSelector = (state) => {
  // console.log(state.movies.nowPlaying.movies);
  return state.movies.nowPlaying.movies;
}
export const topRatedMoviesSelector = (state) => {
  // console.log(state.movies.topRated.movies);
  return state.movies.topRated.movies;
}
export const upcomingMoviesSelector = (state) => {
  // console.log(state.movies.upcoming.movies);
  return state.movies.upcoming.movies;
}
export const favoritesMoviesSelector = (state) => {
  // console.log(state.movies.favorites.movies);
  return state.movies.favorites.movies;
}
export const getMovieByIdSelector = (state) => {
  // console.log(state.movies.movieById.movie);
  return state.movies.movieById.movie;
}
export const allMoviesSelector = (state) => {
  // console.log(state.movies.movies.movies);
  return state.movies.movies.movies;
}
