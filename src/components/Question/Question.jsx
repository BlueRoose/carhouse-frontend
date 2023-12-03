import { Link } from "react-router-dom";
import styles from "./Question.module.scss";

const Question = () => {
  return (
    <div className={styles.question}>
      <div className={styles.left}>
        <h2>Have a question?</h2>
        <p>Our experts are always happy to help you with any question</p>
        <div className={styles.buttons}>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <p className={styles.bt1}>Contact us</p>
          </Link>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Question;
