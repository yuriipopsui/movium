import { NavLink } from "react-router-dom";
import styles from "./NavList.module.scss";
import PropTypes from "prop-types";
import classnames from "classnames";

const NavList = ({ data: { className, listItems },direction, customClassName } ) => {
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
                className={classnames(styles[`${className}__listItemLink`], styles.list__item_link)}
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
};

export default NavList;
