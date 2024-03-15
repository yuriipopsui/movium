import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";
import styles from "./ImageSlider.module.scss";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";

const ImageSlider = ({sliderTitle, movies}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: movies?.length >= 3 ? 3 : movies?.length === 2 ? 2 : 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: movies?.length >= 3 ? 3 : movies?.length === 2 ? 2 : 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.sliderWrapper}>
      <h2 className={styles.sliderWrapper__title}>{sliderTitle}</h2>
      <Slider {...settings}>
        {movies &&
          movies.map((item) => <MovieCard movie={item} key={item.title || item.name} />)} 
      </Slider>
    </div>
  );
};

ImageSlider.propTypes = {
  sliderTitle: PropTypes.string,
  movies: PropTypes.array
}

export default ImageSlider;
