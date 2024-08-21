import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { LogIn } from "../../store/reducers/isAuthReducer";
import { usersSelector } from "../../store/selectors/usersSelector";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userName: "",
    userPassword: "",
  });
  const [error, setError] = useState("");
  //Get users List from fake storage
  const usersList = useSelector(usersSelector);

  const onClickHandler = () => {
    navigate("/register_page");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    if (error) {
      setError("");
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!userData.userName || !userData.userPassword) {
      setError("All fields are required.");
      return;
    }

    const user = usersList.find((user) => user.userName === userData.userName);

    if (!user) {
      // User with that name not exist
      setError("User with this userName does not exist. Register Please");
      return;
    } else if (user.userPassword !== userData.userPassword) {
      // User name is correct but Password is not match
      setError("Incorrect Password. Please try again");
      return;
    } else {
      // User Name and password are correct
      dispatch(LogIn(userData));
      navigate("/");
    }
    // user ? (dispatch(LogIn(userData)), navigate('/')) : navigate("/register_page");
    setUserData({
      userName: "",
      userPassword: "",
    });
  };

  return (
    <div className={styles.login}>
      <form className={styles.login__form} onSubmit={onSubmitHandler}>
        <h3 className={styles.login__form_title}>Log In</h3>
        <input
          className={styles.login__form_input}
          type="text"
          placeholder="User login..."
          name="userName"
          value={userData.userName}
          onChange={onChangeHandler}
        />
        <input
          className={styles.login__form_input}
          type="text"
          placeholder="User password..."
          name="userPassword"
          value={userData.userPassword}
          onChange={onChangeHandler}
        />
        {error && <p className={styles.login__form_error}>{error}</p>}
        <button
          className={`${styles.login__form_button} ${
            error ? styles.disabled : ""
          }`}
          type="submit"
          disabled={error}
        >
          Log In
        </button>
        <p className={styles.login__form_register} onClick={onClickHandler}>
          Register
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
