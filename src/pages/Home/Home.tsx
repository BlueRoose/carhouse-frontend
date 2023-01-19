import { FC } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import styles from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Slider></Slider>
      <div className={styles.about}>
        <div className={styles.info}>
          <h4>About us</h4>
          <h2>Carhouse is the best place to get your dream car</h2>
          <p>
            Every day our managers and consultants work to provide you with the
            best service and cars.
          </p>
        </div>
        <img src="res/cars.webp" alt="office" width={422} height={248} />
      </div>
      <div className={styles.brands}>
        <h2>Our brands</h2>
        <ul>
          <li>BMW</li>
          <li>Mercedes</li>
          <li>Porsche</li>
          <li>Lamborghini</li>
          <li>Ford</li>
          <li>Dodge</li>
          <li>Aston Martin</li>
        </ul>
      </div>
      <div className={styles.us}>
        <h2>Why choose us</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="res/money.png" alt="price" />
            <h3>The best price that you really expect</h3>
          </div>
          <div className={styles.card}>
            <img src="res/support.png" alt="support" />
            <h3>Support ready 24/7 to serve you</h3>
          </div>
          <div className={styles.card}>
            <img src="res/star.png" alt="brand" />
            <h3>Top brand in the world</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
