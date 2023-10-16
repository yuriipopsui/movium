import styles from "./Home.module.scss";
import {
  popularMoviesSelector,
  nowPlayingMoviesSelector,
  topRatedMoviesSelector,
} from "../../store/selectors/moviesSelector";
import { getPopular } from "../../store/reducers/popularMoviesReducer";
import { getNowPlayingMovies } from "../../store/reducers/nowPlayingMoviesReducer";
import {getTopRatedMovies} from "../../store/reducers/topRatedMoviesReducer";
import Header from "../Header/Header";
import Banner from "../../assets/banner_temp.png";
import ImageSliderWithFetch from "../Slider/ImageSliderWithFetch";

const Home = () => {
  
  return (
    <div className={styles.home}>
      <Header />
      <img className={styles.home__banner} src={Banner} alt="banner" />

      <ImageSliderWithFetch
        sliderTitle="Now Playing Movies"
        moviesSelector={nowPlayingMoviesSelector}
        getMovies={getNowPlayingMovies}
      />
      <ImageSliderWithFetch
        sliderTitle="Top Rated Movies"
        moviesSelector={topRatedMoviesSelector}
        getMovies={getTopRatedMovies}
  />

      <ImageSliderWithFetch
        sliderTitle="Popular Movies"
        moviesSelector={popularMoviesSelector}
        getMovies={getPopular}
      />

    </div>
  );
};

export default Home;
