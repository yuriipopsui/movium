import styles from "./movieCard.module.scss";
import PropTypes from "prop-types";
import {
  addFavorites,
  removeFavorites,
} from "../../store/reducers/favoriteMoviesReducer";
import { useDispatch, useSelector } from "react-redux";
import { favoritesMoviesSelector } from "../../store/selectors/moviesSelector";

import Like from "../common/Like/Like";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favoritesMovies = useSelector(favoritesMoviesSelector);

  const favoriteClickHandler = () => {
    favoritesMovies.includes(movie.id)
      ? dispatch(removeFavorites(movie.id))
      : dispatch(addFavorites(movie.id));
  };

  return (
    <div className={styles.card}>
      <Like 
        favoritesMovies={favoritesMovies} 
        movieId={movie.id} 
        onClick={favoriteClickHandler} />
      <img
        className={styles.card__img}
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="backdrop"
      />
      <div className={styles.card__info}>
        <h5 className={styles.card__info_title}>{movie.title}</h5>
        <p className={styles.card__info_description}>{movie.release_date}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
