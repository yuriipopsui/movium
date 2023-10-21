import styles from "./Favorites.module.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { favoritesMoviesSelector } from "../../store/selectors/moviesSelector";
import MoviePage from "../common/MoviePage/MoviePage";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

const Favorites = () => {
  const selectedIds = useSelector(favoritesMoviesSelector);
  const [movies, setMovies] = useState([]);

  // console.log(selectedIds);

  const fetchMovies = async (movieIds) => {
    const movieData = [];
    for(const id of movieIds) {
      try{
        const response = await axios.get(
          `movie/${id}?api_key=${import.meta.env.VITE_APP_API_KEY}&language=en-US`
        );
        movieData.push(response.data);
      } catch(error) {
        console.log(error.message);
      }
    }
    return movieData;
  }

  useEffect(() => {
    fetchMovies(selectedIds)
    .then(fetchedMovies => setMovies(fetchedMovies))
    .catch((error) => 
      console.log(error.message)
    )
  }, [selectedIds]);

  // console.log(movies);
  // console.log(movies?.length);

  const bannerSource = () => {
    const randomMovie =
      movies?.length > 0 &&
      movies[Math.floor(Math.random() * movies?.length)];
    return `https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`;
  };

  return (
    <div className={styles.favorites}>
      {movies?.length > 0 ? (
        <MoviePage
          sliderTitle="Favorite Movies"
          movies={movies}
          bannerSource={bannerSource()}
        />
      ) : (
        <div className={styles.favorites__info}>No Favorites Movies Yet!</div>
      )}
    </div>
  );
};

export default Favorites;
