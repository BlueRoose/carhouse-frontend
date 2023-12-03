import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = () => {
  const { pathname } = useLocation();
  const token = localStorage.getItem("token");
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
        <Link to="/services" style={{ textDecoration: "none" }}>
          <li
            style={
              pathname === "/services"
                ? { color: "#ffffff" }
                : { color: "#979797" }
            }
          >
            Services
          </li>
        </Link>
        <Link to="/collections" style={{ textDecoration: "none" }}>
          <li
            style={
              pathname === "/collections"
                ? { color: "#ffffff" }
                : { color: "#979797" }
            }
          >
            Collections
          </li>
        </Link>
        {
          token &&         <Link to="/favourites" style={{ textDecoration: "none" }}>
          <li
            style={
              pathname === "/favourites"
                ? { color: "#ffffff" }
                : { color: "#979797" }
            }
          >
            Favourites
          </li>
        </Link>
        }
        { !token &&         <Link to="/authorization" style={{ textDecoration: "none" }}>
          <li
            style={
              pathname === "/authorization"
                ? { color: "#ffffff" }
                : { color: "#979797" }
            }
          >
            Authorization
          </li>
        </Link>}
      </ul>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <p className={styles.contact}>Contact us</p>
      </Link>
    </header>
  );
};

export default Header;
