import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ src, name, text }) => {
  return (
    <div className={styles.serviceCard}>
      <img src={src} alt="logo" />
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ServiceCard;
