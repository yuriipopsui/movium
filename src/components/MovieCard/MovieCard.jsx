import styles from "./movieCard.module.scss";
import PropTypes from 'prop-types';
import like from '../../assets/icons/like.png';

const MovieCard = ({movie}) => {

  // console.log(movie.title);
  // console.log(movie);
  return (
    <div className={styles.card}>
      <div className={styles.card__like}>
        <img className={styles.card__like_img} src={like} alt="like" />
      </div>
        <img className={styles.card__img} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="backdrop" />
      <div className={styles.card__info}>
        <h5 className={styles.card__info_title}>{movie.title}</h5>
        <p className={styles.card__info_description}>{movie.release_date}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
}

export default MovieCard;
