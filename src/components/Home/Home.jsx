import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import styles from "./Home.module.scss";
import { popularMoviesSelector } from "../../store/selectors/popularMoviesSelector";
import {getPopular} from "../../store/reducers/popularMoviesReducer";
import Header from "../Header/Header";
import Banner from '../../assets/banner_temp.png';
import MovieCard from "../MovieCard/MovieCard"

const Home = () => {
  const dispatch = useDispatch();
const [movies, setMovies] = useState();
const selectedMovies = useSelector(popularMoviesSelector);

useEffect(() => {
  dispatch(getPopular())
}, [dispatch]);

useEffect(() => {
  setMovies(selectedMovies)
}, [selectedMovies])

console.log(movies);

  return (
    <div className={styles.home}>
    <Header />
    <img className={styles.home__banner} src={Banner} alt="banner" />
    <div className={styles.home__cardWrapper}>
     {
      movies && movies.map(item => (
        <MovieCard movie={item} key={item.title}/>
      )
        // console.log(item)
        
      )
     }
    </div>
    
    </div>
  
  );
};

export default Home;
