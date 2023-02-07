import { FC } from "react";
import Option from "../Option/Option";
import styles from "./CarCard.module.scss";

interface CarCardProps {
  brand: string | undefined,
  name: string,
  img: string,
  price: number,
  transmition: string,
  passenger: number,
  topSpeed: number,
  horsePower: number,
  time: number,
}

const CarCard: FC<CarCardProps> = ({ brand, name, img, price, transmition, passenger, topSpeed, horsePower, time}) => {
  return (
    <div className={styles.carCard}>
      <img src={`http://localhost:5000/${img}`} alt="cardImage" />
      <p className={styles.price}>$ {price}</p>
      <div className={styles.description}>
        <h2>{brand + " " + name}</h2>
        <div className={styles.options}>
          <Option name="Transmission" value={transmition} />
          <Option name="Passenger" value={passenger + " pers"} />
          <Option name="Top speed" value={topSpeed + " km/h"} />
          <Option name="HP" value={horsePower} />
          <Option name="0-100 km/h" value={time + " sec"} />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
