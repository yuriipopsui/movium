import styles from "./Home.module.scss";
import Header from "../Header/Header";
import Banner from '../../assets/banner_temp.png';

const Home = () => {
  return (
    <div className={styles.home}>
    <Header />
    <img className={styles.home__banner} src={Banner} alt="banner" />
    {/* <div className={styles.home}>Home</div> */}
    {/* <div className="fgjh">Otherblok</div> */}
    </div>
  
  );
};

export default Home;
