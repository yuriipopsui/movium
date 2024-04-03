import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./SearchForm.module.scss";
import PropTypes from "prop-types";
import classnames from "classnames";

import { setSearchTerm } from "../../../store/reducers/searchReducer";
import SearchIcon from "../../../assets/icons/search.png";

const SearchForm = ({active}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    // Add event listener to handle clicks outside of the search form
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  // const handleOnClick = () => {
  //   isActive
  //   ? setIsActive(false)
  //   : setIsActive(true)
  //   console.log(isActive);
  // }

  const handleOnChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isActive && searchValue !== "") {
      dispatch(setSearchTerm(searchValue));
      navigate("/search_results");
    } else {
      setIsActive(true);
    }
  };

  const handleCloseClick = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.searchForm} ref={searchRef}>
      <form className={styles.searchForm__form} onSubmit={handleSubmit}>
        <input
          className={
            isActive
              ? classnames(
                  styles.searchForm__form_input,
                  styles.searchForm__form_input_active
                )
              : styles.searchForm__form_input
          }
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleOnChange}
          // onClick={handleOnClick}
        />
        <button
          className={
            searchValue == "" && isActive 
              ? classnames(styles.searchForm__form_button, styles.searchForm__form_button_active) 
              : styles.searchForm__form_button
          }
          type="submit"
        >
          {
            <img
              className={styles.searchForm__form_image}
              src={SearchIcon}
              alt="search icon"
            />
          }
        </button>
      </form>
      {isActive && (
        <div
          className={styles.searchForm__closeButton}
          onClick={handleCloseClick}
        >
          <i className={styles.searchForm__closeButton_text}>x</i>
        </div>
      )}
    </div>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func,
  active: PropTypes.bool,
};

export default SearchForm;
