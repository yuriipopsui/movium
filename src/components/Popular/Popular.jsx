import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import styles from "./Popular.module.scss";

import { popularMoviesSelector } from "../../store/selectors/moviesSelector";
import { getPopular } from "../../store/reducers/popularMoviesReducer";
import MoviePage from "../common/MoviePage/MoviePage";

const Popular = () => {
  const dispatch = useDispatch();
  const selectedMovies = useSelector(popularMoviesSelector);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    dispatch(getPopular());
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
    <div className={styles.popular}>
      <h1>Popular</h1>
      <MoviePage sliderTitle="Popular Movies" movies={movies} bannerSource={bannerSource()} />
    </div>
  );
};

export default Popular;
