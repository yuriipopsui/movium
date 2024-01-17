import styles from "./movieCard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  addFavorites,
  removeFavorites,
} from "../../store/reducers/favoriteMoviesReducer";
import { favoritesMoviesSelector } from "../../store/selectors/moviesSelector";
import playerButton from "../../assets/icons/playFilled.svg";
import Like from "../common/Like/Like";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoritesMovies = useSelector(favoritesMoviesSelector);

  const favoriteClickHandler = () => {
    favoritesMovies.includes(movie.id)
      ? dispatch(removeFavorites(movie.id))
      : dispatch(addFavorites(movie.id));
  };

  const playClickHandler = (id) => {
    console.log('PlayButton');
    console.log(id)
    return navigate(`/videopage/${id}`)
  }

 
  return (
    <div className={styles.card}>
      <img className={styles.card__playerButton} 
        src={playerButton} 
        alt="player button" 
        onClick={() => playClickHandler(movie.id)} />
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
