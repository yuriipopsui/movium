import { useState, useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import styles from "./TvShows.module.scss";
import {allShowsSelector} from "../../store/selectors/showsSelector";
import { getTvShows } from "../../store/reducers/tvShowReducer";
import MoviePage from "../../components/common/MoviePage/MoviePage";

const TvShows = () => {
  const dispatch = useDispatch();
  const selectedShows = useSelector(allShowsSelector);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    dispatch(getTvShows());
  }, [dispatch]);

  useEffect(() => {
    setShows(selectedShows);
  }, [selectedShows]);

  const bannerSource = () => {
    const randomMovie = shows?.length > 0 && shows[Math.floor(Math.random() * (shows?.length + 1))];
    return (
      `https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`
    );
  }
  
  return (
    <div className={styles.shows}>
      {/* <h1>All TV Shows</h1> */}
      <MoviePage sliderTitle="TV Shows" movies={shows} bannerSource={bannerSource()} />
    </div>
  );
}

export default TvShows;