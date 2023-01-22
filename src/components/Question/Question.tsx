import { FC } from "react";
import styles from "./Question.module.scss";

const Question: FC = () => {
  return (
    <div className={styles.question}>
      <div className={styles.left}>
        <h2>Have a question?</h2>
        <p>Our experts are always happy to help you with any question</p>
        <div className={styles.buttons}>
          <button className={styles.bt1}>Contact us</button>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Question;
