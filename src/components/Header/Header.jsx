import styles from './Header.module.scss';
import { headerNavigationList } from '../../config/headerNavigation';
import NavList from '../common/NavList/NavList';
import SearchForm from '../common/SearchForm/SearchForm';
// import Banner from '../../assets/banner_temp.png';

function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.header__nav}>
      <SearchForm active={false}/>
        {
          Object.values(headerNavigationList).map(item => (
              <NavList customClassName={styles.customList} data={item} key={item.className} direction="row" />
          ))
        }
      </nav>
      <div className={styles.header__user}>user</div>
    </div>
  )
}

export default Header