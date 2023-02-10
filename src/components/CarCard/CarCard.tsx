import { FC } from "react";
import { Link } from "react-router-dom";
import Option from "../Option/Option";
import styles from "./CarCard.module.scss";

interface CarCardProps {
  id: number;
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

const CarCard: FC<CarCardProps> = ({ id, brand, name, img, price, transmition, passenger, topSpeed, horsePower, time}) => {
  return (
    <div className={styles.carCard}>
      <Link to={"/collections/car/" + id} style={{textDecoration: "none", color: "#000000"}}><img src={`http://localhost:5000/${img}`} alt="cardImage" /></Link>
      <Link to={"/collections/car/" + id} style={{textDecoration: "none", color: "#000000"}}><p className={styles.price}>$ {price}</p></Link>
      <div className={styles.description}>
        <h2>{brand + " " + name}</h2>
        <div className={styles.options}>
          <Option name="Transmission" value={transmition} />
          <Option name="Top speed" value={topSpeed + " km/h"} />
          <Option name="Horse Power" value={horsePower} />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
