/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UpComing.module.scss";
import { upcomingMoviesSelector } from "../../store/selectors/moviesSelector";
import { getUpcomingMovies } from "../../store/reducers/upComingMoviesReducer";
import MoviePage from "../common/MoviePage/MoviePage";


const UpComing = () => {
  const dispatch = useDispatch();
  const selectedMovies = useSelector(upcomingMoviesSelector);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  useEffect(() => {
    setMovies(selectedMovies);
    // if(prevSelectedRef.current !== selectedMovies) {
    //   console.log("SelectedMovies reference changed.");
    //   console.log("Prev reference:", prevSelectedRef.current);
    //   console.log("Next reference:", selectedMovies);
    //   // Update the ref to the current reference
    //   prevSelectedRef.current = selectedMovies;
    // }
  }, []);

  // if (import.meta.env.VITE_APP_ENV !== "development") {
  //   console.log("Movies: ", movies);
  // }

  const bannerSource = () => {
    const randomMovie = movies?.length > 0 && movies[Math.floor(Math.random() * (movies?.length + 1))];
    return (
      `https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`
    );
  };
  
  return (
    <div className={styles.upcoming}>
      <h1>Coming Soon</h1>
      <MoviePage sliderTitle="COMING SOON" movies={movies} bannerSource={bannerSource()} />
    </div>
  );
};

export default UpComing;
