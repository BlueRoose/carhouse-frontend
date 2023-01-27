import { FC } from "react";
import styles from "./Option.module.scss";

interface OptionProps {
  name: string;
  value: string | number;
}

const Option: FC<OptionProps> = ({ name, value }) => {
  return (
    <div className={styles.option}>
      <p>{name}</p>
      <span>{value}</span>
    </div>
  );
};

export default Option;
