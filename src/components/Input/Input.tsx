import { FC } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  inputWidth: number;
  inputHeight: number;
  onChange: (name: string, value: string) => void;
  value?: string;
  type: string;
  pattern?: string;
}

const Input: FC<InputProps> = ({ type, label, inputWidth, inputHeight, onChange, value, pattern }) => {
  return (
    <div className={styles.input}>
      <span>{label}</span>
      <input type={type} pattern={pattern ? pattern : undefined} value={value} onChange={(event) => onChange(label.toLowerCase(), event.target.value)} style={{ width: inputWidth, height: inputHeight }} />
    </div>
  );
};

export default Input;
