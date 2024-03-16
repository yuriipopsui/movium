import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchResultSelector, searchTermSelector } from '../../store/selectors/searchSelector';
import { getSearchedItems } from '../../store/reducers/searchReducer';
import styles from './SearchPage.module.scss';
import MoviePage from "../common/MoviePage/MoviePage";


const SearchPage = () => {
  const dispatch = useDispatch();
  const selectedTerm = useSelector(searchTermSelector);
  const selectedItems = useSelector(searchResultSelector)
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(getSearchedItems(selectedTerm));
  }, [dispatch, selectedTerm]);

  useEffect(() => {
    setItems(selectedItems);
  }, [selectedItems]);

  const bannerSource = () => {
    const randomMovie = items?.length > 0 && items[Math.floor(Math.random() * (items?.length + 1))];
    return (
      `https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`
    );
  }

  return (
    <div className={styles.container}>
      <h3>SearchPage</h3>
      <MoviePage sliderTitle="Serach Result" movies={items} bannerSource={bannerSource()} />
    </div>

  )
}

export default SearchPage;