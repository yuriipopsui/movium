import { NavLink } from "react-router-dom";
import styles from "./NavList.module.scss";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../../store/reducers/isAuthReducer";

const NavList = ({ data: { className, listItems },direction, customClassName } ) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = (value) => {
   if(value === "Logout")  {
    dispatch(Logout());
    navigate('/');
    }
  }

  return (
    <div>
      <ul className={classnames(styles[`${className}`], styles.list, customClassName)} 
          style={{flexDirection: direction}}>
        {listItems &&
          listItems.map((item) => (
            <li className={classnames(styles[`${className}__listItem`], styles.list__item) } key={item.name}>
              {
                item.iconPath && <img src={item.iconPath} alt={`icon${item.name}`} />
              }
              <NavLink
                to={`${item.link}`}
                className={classnames(styles[`${className}__listItemLink`], styles.list__item_link)} onClick={() => onClickHandler(item.name)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

NavList.propTypes = {
  data: PropTypes.object,
  direction: PropTypes.string,
  customClassName: PropTypes.string,
  Component: PropTypes.func
};

export default NavList;
