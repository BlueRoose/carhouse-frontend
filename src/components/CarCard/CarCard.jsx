import { Link } from "react-router-dom";
import Option from "../Option/Option";
import styles from "./CarCard.module.scss";

const CarCard = ({
  id,
  brand,
  name,
  img,
  price,
  transmission,
  topSpeed,
  horsePower,
  isOrdered,
  isFavourited
}) => {

  return (
    <div className={styles.carCard}>
      <Link
        to={isOrdered ? "/collections" : "/collections/car/" + id}
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <img
          className={styles.img}
          src={img}
          alt="cardImage"
        />
      </Link>
      <Link
        to={isOrdered ? "/collections" : "/collections/car/" + id}
        style={{ textDecoration: "none", color: "#000000" }}
      >
        {!isOrdered && <p className={styles.price}>$ {price}</p>}
      </Link>
      {isOrdered && (
        <img
          src="res/orderedSmall.svg"
          className={styles.ordered}
          alt="ordered"
        />
      )}
      <div className={styles.description}>
        <h2>{brand + " " + name + `${isFavourited ? "💛" : ""}`}</h2>
        <div className={styles.options}>
          <Option name="Transmission" value={transmission} />
          <Option name="Top speed" value={topSpeed + " km/h"} />
          <Option name="Horse Power" value={horsePower} />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
