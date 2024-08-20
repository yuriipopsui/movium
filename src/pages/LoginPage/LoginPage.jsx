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
  //Get users List from fake storage
  const usersList = useSelector(usersSelector);

  const onClickHandler = () => {
    navigate('/register_page');
  }

  const onChangeHandler = (event) => {
    event.preventDefault();
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const user = usersList.find(
      (item) =>
        item.userName === userData.userName &&
        item.userPassword === userData.userPassword
    );
    user ? dispatch(LogIn(userData), navigate('/')) : navigate("/register_page");
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
        <button className={styles.login__form_button} type="submit">
          Log In
        </button>
        <h3 className={styles.login__form_register} onClick={onClickHandler}>Or Register</h3>
      </form>
      
    </div>
  );
};

export default LoginPage;
