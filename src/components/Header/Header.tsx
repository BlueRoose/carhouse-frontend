import { FC } from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ul className={styles.navbar}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Collections</li>
        <li>Blog</li>
      </ul>
      <button>Contact us</button>
    </header>
  );
};

export default Header;
