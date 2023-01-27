import { FC } from "react";
import Option from "../Option/Option";
import styles from "./CarCard.module.scss";

const CarCard: FC = () => {
  return (
    <div className={styles.carCard}>
      <img src="res/bmwM5s.png" alt="cardImage" />
      <p className={styles.price}>$540.000</p>
      <div className={styles.description}>
        <h2>BMW M5 Competition</h2>
        <div className={styles.options}>
          <Option name="Transmission" value="Automatic" />
          <Option name="Passenger" value="4 Person" />
          <Option name="Top speed" value="332 km/h" />
          <Option name="HP" value="620" />
          <Option name="0-100 km/h" value="4.2s" />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
