import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

export const getPopularMovies = async () => {
  try {
    const res = await axios
      .get(
        `movie/popular?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }&language=en-US&page=1`
      )
      .then((res) => console.log(res.data.results));
    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const res = await axios
      .get(
        `movie/now_playing?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }&language=en-US&page=1`
      )
      .then((res) => console.log(res.data.results));
    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getTopRatedMovies = async () => {
  try {
    const res = await axios
      .get(
        `movie/top_rated?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }&language=en-US&page=1`
      )
      .then((res) => console.log(res.data.results));
    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getUpcomingMovies = async () => {
  try {
    const res = await axios.get(`movie/upcoming?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }&language=en-US&page=1`)
    .then(res => console.log(res.data.results));
    return res.data.results;
  } catch (error) {
    console.log(error.message);
  }
} 