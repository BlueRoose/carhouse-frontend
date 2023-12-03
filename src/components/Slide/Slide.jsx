import styles from "./Slide.module.scss";

const Slide = ({
  typeOfCar,
  carName,
  description,
  price,
  src,
  width,
}) => {
  return (
    <div className={styles.slide}>
      <div className={styles.left}>
        <div className={styles.info}>
          <p>{typeOfCar}</p>
          <h2>{carName}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.price}>
          <p>Starting from</p>
          <h4>$ {price}</h4>
        </div>
      </div>
      <img src={src} alt="car" width={width} />
    </div>
  );
};

export default Slide;
