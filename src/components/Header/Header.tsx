import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <Logo />
      <ul className={styles.navbar}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li
            style={
              pathname === "/" ? { color: "#ffffff" } : { color: "#979797" }
            }
          >
            Home
          </li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li
            style={
              pathname === "/about"
                ? { color: "#ffffff" }
                : { color: "#979797" }
            }
          >
            About
          </li>
        </Link>
        <li
          style={
            pathname === "Services"
              ? { color: "#ffffff" }
              : { color: "#979797" }
          }
        >
          Services
        </li>
        <li
          style={
            pathname === "Collections"
              ? { color: "#ffffff" }
              : { color: "#979797" }
          }
        >
          Collections
        </li>
      </ul>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <p className={styles.contact}>Contact us</p>
      </Link>
    </header>
  );
};

export default Header;