import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.scss";
import { addUser } from "../../store/reducers/usersReducer";
import { LogIn } from "../../store/reducers/isAuthReducer";
import { usersSelector } from "../../store/selectors/usersSelector";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    userPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState('');

  //Get users List from fake storage
  const usersList = useSelector(usersSelector);

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value });
    // Clear any existing errors when the user changes input
    if(error) {
      setError('');
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(!formData.userName || !formData.userPassword || !formData.confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (formData.userPassword !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    } 

    const isUserExists = usersList.some(
      (user) => user.userName === formData.userName
    );
    if (isUserExists) {
      setError('User with this userName already exists.');
      return;
    } else {
      const newUser = {
        userName: formData.userName,
        userPassword: formData.userPassword
      }
      //add new User to store
      dispatch(addUser(newUser));

      //log In new User immediatly after successful registration
        dispatch(LogIn(newUser));
        navigate("/popular");
    }
     //Reset form data after successful registration
    setFormData({
      userName: "",
      userPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className={styles.register}>
      <h2>REGISTER PAGE</h2>
      <form className={styles.register__form} onSubmit={onSubmitHandler}>
        <h3 className={styles.register__form_title}>REGISTER</h3>
        <input
          className={styles.register__form_input}
          type="text"
          placeholder="Create login..."
          name="userName"
          value={formData.userName}
          onChange={onChangeHandler}
        />
        <input
          className={styles.register__form_input}
          type="text"
          placeholder="Create password..."
          name="userPassword"
          value={formData.userPassword}
          onChange={onChangeHandler}
        />
        <input
          className={styles.register__form_input}
          type="text"
          placeholder="Confirm password..."
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={onChangeHandler}
        />
        {error && (
          <p className={styles.register__form_error}>{error}</p>
        )}
        <button className={`${styles.register__form_button} ${error ? styles.disabled : ''}`} disabled={error}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
