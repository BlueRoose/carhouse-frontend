import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBuyRequests } from "../../api/buyRequests";
import Option from "../Option/Option";
import styles from "./CarCard.module.scss";

interface CarCardProps {
  id: number;
  brand: string | undefined;
  name: string;
  img: string;
  price: number;
  transmition: string;
  passenger: number;
  topSpeed: number;
  horsePower: number;
  time: number;
}

interface Request {
  id: number;
  carId: number;
  name: string;
  email: string;
  phone: string;
}

const CarCard: FC<CarCardProps> = ({
  id,
  brand,
  name,
  img,
  price,
  transmition,
  passenger,
  topSpeed,
  horsePower,
  time,
}) => {
  const [isOrdered, setIsOrdered] = useState<boolean>(false);

  useEffect(() => {
    getBuyRequests().then((requests) => {
      for (let i = 0; i < requests.length; i++) {
        console.log(name, requests[i].carId === id);
        if (requests[i].carId === id) {
          setIsOrdered(true);
          break;
        }
        else {
          setIsOrdered(false);
        }
      }
      // requests.forEach((order: Request) => {
      //   console.log(name, order.carId === id)
      //   if (order.carId === id) {
      //     setIsOrdered(true);
      //   }
    });
    }, [name, id]);

  return (
    <div className={styles.carCard}>
      <Link
        to={isOrdered ? "/collections" : "/collections/car/" + id}
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <img
          className={styles.img}
          src={`http://localhost:5000/${img}`}
          alt="cardImage"
        />
      </Link>
      <Link
        to={isOrdered ? "/collections" : "/collections/car/" + id}
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <p className={styles.price}>$ {price}</p>
      </Link>
      {isOrdered && (
        <img
          src="res/orderedSmall.svg"
          className={styles.ordered}
          alt="ordered"
        />
      )}
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
