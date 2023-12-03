import styles from "./Line.module.scss";

const Line = ({ name, value }) => {
  return (
    <div className={styles.line}>
      <p className={styles.left}>{name}</p>
      <p className={styles.right}>{value}</p>
    </div>
  );
};

export default Line;
