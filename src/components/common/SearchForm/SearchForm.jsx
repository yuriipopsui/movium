import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setSearchTerm } from '../../../store/reducers/searchReducer';

const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchTerm(searchValue));
    navigate('/search_results');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Search..."
      value={searchValue}
      onChange={handleOnChange}
       />
       <button type="submit">Search</button>
    </form>
  )
}

SearchForm.propTypes = {
  onSearch: PropTypes.func
}

export default SearchForm;