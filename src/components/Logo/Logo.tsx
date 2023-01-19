import { FC } from "react";
import styles from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <p className={styles.logo}>
      <span className={styles.first}>C A R </span>
      <span className={styles.second}>H O U S E</span>
    </p>
  );
};

export default Logo;
