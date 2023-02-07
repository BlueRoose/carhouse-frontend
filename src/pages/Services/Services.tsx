import { FC, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import styles from "./Services.module.scss";

const Services: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.services}>
      <Header />
      <div className={styles.head}>
        <h2>Services</h2>
        <p>We tailor our services to suit your needs</p>
      </div>
      <div className={styles.cards}>
        <ServiceCard
          src="res/moneyBlack.png"
          name="The best price that you really expect"
          text="Our cars are cheaper than in other car dealerships"
        />
        <ServiceCard
          src="res/supportBlack.png"
          name="Support is ready 24/7 to serve you"
          text="Our managers are ready to answer your questions at any time of the day."
        />
        <ServiceCard
          src="res/starBlack.png"
          name="Top brand in the world"
          text="Our reputation based on our customer reviews makes us the most popular car dealership"
        />
      </div>
      <div className={styles.video}>
        <h2>Get your favourite car with us</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/YAWt-gktZqM?controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className={styles.mission}>
        <img src="res/consult.jpg" alt="office" width={422} height={248} />
        <div className={styles.info}>
          <h4>Our mission</h4>
          <h2>Every year we sell hungreds of cars all over the world</h2>
          <p>We know our business and provide you with only the best cars</p>
        </div>
      </div>
      <Question />
      <Footer />
    </div>
  );
};

export default Services;
