/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../store/reducers/isAuthReducer";
import styles from "./LogOut.module.scss";

const LogOut = ({ isOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = () => {
    dispatch(Logout());
    navigate('/');
  };
  return (
    <div
      className={`${styles.logout} ${isOpen ? styles.active : ""}`}
      onClick={onClickHandler}
    >
      LogOut
    </div>
  );
};

export default LogOut;
