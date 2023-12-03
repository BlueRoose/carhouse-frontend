import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";

const Footer = () => {
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li>About</li>
            </Link>
            <Link to="/services" style={{ textDecoration: "none" }}>
              <li>Services</li>
            </Link>
            <Link to="/collections" style={{ textDecoration: "none" }}>
              <li>Collections</li>
            </Link>
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
