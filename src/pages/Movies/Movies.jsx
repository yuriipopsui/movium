import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import styles from "./Movies.module.scss";

import { allMoviesSelector } from "../../store/selectors/moviesSelector";
import { getMovies } from "../../store/reducers/getMoviesReducer";
import MoviePage from "../../components/common/MoviePage/MoviePage";

const Movies = () => {
  const dispatch = useDispatch();
  const selectedMovies = useSelector(allMoviesSelector);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    setMovies(selectedMovies);
    
  }, [selectedMovies]);

  const bannerSource = () => {
    const randomMovie = movies?.length > 0 && movies[Math.floor(Math.random() * (movies?.length + 1))];
    return (
      `https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`
    );
  };
  
  return (
    <div className={styles.movies}>
      {/* <h1>All Movies</h1> */}
      <MoviePage sliderTitle="Movies" movies={movies} bannerSource={bannerSource()} />
    </div>
  );
};

export default Movies;
