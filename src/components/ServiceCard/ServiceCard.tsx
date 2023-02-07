import { FC } from "react";
import styles from "./ServiceCard.module.scss";

interface ServiceCardProps {
    src: string;
    name: string;
    text: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ src, name, text }) => {
    return (
        <div className={styles.serviceCard}>
            <img src={src} alt="logo" />
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
    );
}

export default ServiceCard