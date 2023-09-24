import styles from "./Trending.module.scss";
import ImageSlider from "../Slider/Slider";

import { popularMoviesSelector } from "../../store/selectors/popularMoviesSelector";
import { getPopular } from "../../store/reducers/popularMoviesReducer";

const Trending = () => {
  return (
    <div className={styles.trending}>
      <h1>Trending</h1>
      <ImageSlider
        sliderTitle="Popular Movies"
        moviesSelector={popularMoviesSelector}
        getMovies={getPopular}
        topPosition="50px"
      />
    </div>
  );
};

export default Trending;
