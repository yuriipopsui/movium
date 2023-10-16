import styles from "./MoviePage.module.scss";
import PropTypes from "prop-types";
import ImageSlider from "../../Slider/ImageSlider";
import MovieBanner from "../MovieBanner/MovieBanner";

const MoviePage = ({ sliderTitle, movies, bannerSource }) => {
  return (
    <div className={styles.moviePage}>
      <MovieBanner bannerSrc={bannerSource} />
      <ImageSlider sliderTitle={sliderTitle} movies={movies} />
    </div>
  );
};

MoviePage.propTypes= {
  sliderTitle: PropTypes.string,
  movies: PropTypes.array,
  bannerSource: PropTypes.string
}

export default MoviePage;
