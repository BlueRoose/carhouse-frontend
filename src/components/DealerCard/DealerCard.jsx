import styles from "./DealerCard.module.scss";

const DealerCard = ({ city, country, description }) => {
  return (
    <div className={styles.dealercard}>
      <h4>{city}</h4>
      <p>{country}</p>
      <span>{description}</span>
    </div>
  );
};

export default DealerCard;
