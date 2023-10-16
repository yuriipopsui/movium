import styles from "./MovieBanner.module.scss";
import PropTypes from "prop-types";


const MovieBanner = ({bannerSrc}) => {
  return (
    <div className={styles.banner}>
       <img className={styles.banner__img} src={bannerSrc} alt="backdrop" />
      </div>
  )
}

MovieBanner.propTypes = {
  bannerSrc: PropTypes.string
}

export default MovieBanner;