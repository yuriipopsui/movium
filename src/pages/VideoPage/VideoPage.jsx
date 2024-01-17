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

  useEffect(() => {
    dispatch(getMovieById(params.id));
  }, [dispatch, params.id]);

  return (
    <div>
      {movie && (
        <div>
          <img
            className={styles.card__img}
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="backdrop"
          />
        </div>
      )}
    </div>
  );
};

export default VideoPage;
