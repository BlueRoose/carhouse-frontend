import { FC } from "react";
import styles from "./DealerCard.module.scss";

interface DealerCardProps {
  city: string;
  country: string;
  description: string;
}

const DealerCard: FC<DealerCardProps> = ({ city, country, description }) => {
  return (
    <div className={styles.dealercard}>
      <h4>{city}</h4>
      <p>{country}</p>
      <span>{description}</span>
    </div>
  );
};

export default DealerCard;
