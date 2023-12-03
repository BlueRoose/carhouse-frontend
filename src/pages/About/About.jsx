import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import styles from "./About.module.scss";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.about}>
      <Header />
      <div className={styles.first}>
        <h2>About us</h2>
        <p>
          A team that understands that a car is not just a means of
          transportation
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="res/money.png" alt="price" />
            <h4>The best price that you really expect</h4>
          </div>
          <div className={styles.card}>
            <img src="res/support.png" alt="support" />
            <h4>Support ready 24/7 to serve you</h4>
          </div>
          <div className={styles.card}>
            <img src="res/star.png" alt="brand" />
            <h4>Top brand in the world</h4>
          </div>
        </div>
      </div>
      <div className={styles.we}>
        <img src="res/cars.webp" alt="office" width={422} height={248} />
        <div className={styles.info}>
          <h4>About us</h4>
          <h2>Carhouse is the best place to get your dream car</h2>
          <p>
            Every day our managers and consultants work to provide you with the
            best service and cars.
          </p>
        </div>
      </div>
      <WhyChooseUs />
      <div className={styles.history}>
        <div className={styles.text}>
          <h4>History</h4>
          <h2>We provide the best product for you</h2>
          <p>
            Every day our managers and consultants work to provide you with the
            best service and cars.
          </p>
        </div>
        <img src="res/twocars.webp" alt="history" width={422} height={248} />
      </div>
      <Question />
      <Footer />
    </div>
  );
};

export default About;
