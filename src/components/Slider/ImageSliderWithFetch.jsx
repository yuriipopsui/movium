import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";
import styles from "./ImageSlider.module.scss";
import PropTypes from "prop-types";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MovieCard from "../MovieCard/MovieCard";

const ImageSliderWithFetch = ({sliderTitle, moviesSelector, getMovies}) => {

  const dispatch = useDispatch();
  const [movies, setMovies] = useState();
  const selectedMovies = useSelector(moviesSelector);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch, getMovies]);

  useEffect(() => {
    setMovies(selectedMovies);
  }, [selectedMovies]);

  // console.log(movies);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          movies.map((item) => <MovieCard movie={item} key={item.title} />)}
      </Slider>
    </div>
  );
};

ImageSliderWithFetch.propTypes = {
  sliderTitle: PropTypes.string,
  moviesSelector: PropTypes.func,
  getMovies: PropTypes.func,
  topPosition: PropTypes.string,
  movies: PropTypes.array
}

export default ImageSliderWithFetch;
