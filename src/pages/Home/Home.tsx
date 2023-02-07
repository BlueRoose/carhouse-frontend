import { FC, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import styles from "./Home.module.scss";

const Home: FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
