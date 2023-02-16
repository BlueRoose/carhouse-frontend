import { FC } from "react";
import { Cars } from "../../providers/cars/types";
import styles from "./CompareLine.module.scss";

interface Props {
  name: string;
  values: (number | string | null)[];
}

const CompareLine: FC<Props> = ({ name, values }) => {
  return (
    <div className={styles.line}>
      <p>{name}</p>
      <div className={styles.options}>
        {values.map((value, index) => (
          <span key={index}>{value}</span>
        ))}
      </div>
    </div>
  );
};

export default CompareLine;
