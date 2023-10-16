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