import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <p className={styles.logo}>
      <Link to="/" style={{textDecoration: "none"}}>
      <span className={styles.first}>C A R </span>
      <span className={styles.second}>H O U S E</span>
      </Link>
    </p>
  );
};

export default Logo;
