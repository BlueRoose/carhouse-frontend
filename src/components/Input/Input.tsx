import { FC } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  inputWidth: number;
  inputHeight: number;
  onChange: (name: string, value: string) => void;
}

const Input: FC<InputProps> = ({ label, inputWidth, inputHeight, onChange }) => {
  return (
    <div className={styles.input}>
      <span>{label}</span>
      <input type="text" onChange={(event) => onChange(label, event.target.value)} style={{ width: inputWidth, height: inputHeight }} />
    </div>
  );
};

export default Input;
