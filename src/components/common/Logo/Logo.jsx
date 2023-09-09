import { NavLink } from 'react-router-dom';
import styles from './Logo.module.scss';
import logo from '../../../assets/icons/coffeCup.png';

function Logo() {
  return (
    <div className={styles.logo}>
      <img className={styles.logo__icon} src={logo} alt="logo" />
      <NavLink to="/" className={styles.logo__link}>Movium</NavLink>
    </div>
  )
}

export default Logo;