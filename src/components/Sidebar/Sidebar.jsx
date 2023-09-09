import styles from "./Sidebar.module.scss";
import { navigationListData } from "../../config/navigation";
import NavList from "../common/NavList/NavList";
import Logo from "../common/Logo/Logo";

const Sidebar = () => {

  return (
    <div className={styles.sidebar}>
      <Logo />
      <div className={`${styles.sidebar__menu}`}>
        {Object.values(navigationListData).map((item) => (
          <NavList data={item} key={item.className} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
