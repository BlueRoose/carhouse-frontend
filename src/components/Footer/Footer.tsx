import { FC } from "react";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.links}>
        <div className={styles.logo}>
          <Logo />
          <p>
            Every day our managers and consultants work to provide you with the
            best service and cars.
          </p>
        </div>
        <div className={styles.quick}>
          <h4>Quick links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Collections</li>
          </ul>
        </div>
      </div>
      <div className={styles.sign}>
        <p>CARHOUSE - © 2023 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
