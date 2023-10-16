import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Trending.module.scss";
import { topRatedMoviesSelector } from "../../store/selectors/moviesSelector";
import { getTopRatedMovies } from "../../store/reducers/topRatedMoviesReducer";
import MoviePage from "../common/MoviePage/MoviePage";

const Trending = () => {
  const dispatch = useDispatch();
  const selectedMovies = useSelector(topRatedMoviesSelector);
  const [movies, setMovies] = useState();
  
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  useEffect(() => {
    setMovies(selectedMovies);
  }, [selectedMovies]);

  const bannerSource = () => {
    const randomMovie =
      movies?.length > 0 &&
      movies[Math.floor(Math.random() * (movies?.length + 1))];
    return `https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`;
  };

  return (
    <div className={styles.trending}>
      <h1>Trending</h1>
      <MoviePage
        sliderTitle="Top rated movies"
        movies={movies}
        bannerSource={bannerSource()}
      />
    </div>
  );
};

export default Trending;
