import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./VideoPage.module.scss";

import { getMovieByIdSelector } from "../../store/selectors/moviesSelector";
import { getMovieById } from "../../store/reducers/getMovieByIdReducer";

const VideoPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const movie = useSelector(getMovieByIdSelector);

  console.log(movie);

  useEffect(() => {
    dispatch(getMovieById(params.id));
  }, [dispatch, params.id]);

  return (
    <div className={styles.video}>
      {movie && (
        <div className={styles.video__container}>
          <h2 className={styles.video__title}>{movie.title}</h2>
          <video
            className={styles.video__player}
            src={`https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
            poster={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            width="90%"
            controls
          >
            {movie.id}
          </video>
          <div className={styles.video__description}>
            <h3 className={styles.video__description_title}>About movie: </h3>
            <h3 className={styles.video__description_item}>{movie.overview}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
