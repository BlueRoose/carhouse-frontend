import { FC } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  inputWidth: number;
  inputHeight: number;
}

const Input: FC<InputProps> = ({ label, inputWidth, inputHeight }) => {
  return (
    <div className={styles.input}>
      <span>{label}</span>
      <input type="text" style={{ width: inputWidth, height: inputHeight }} />
    </div>
  );
};

export default Input;
