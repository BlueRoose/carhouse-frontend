import styles from "./Option.module.scss";

const Option = ({ name, value }) => {
  return (
    <div className={styles.option}>
      <p>{name}</p>
      <span>{value}</span>
    </div>
  );
};

export default Option;
