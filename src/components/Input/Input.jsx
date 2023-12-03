import styles from "./Input.module.scss";

const Input= ({
  type,
  label,
  inputWidth,
  inputHeight,
  onChange,
  value,
  pattern,
}) => {
  return (
    <div className={styles.input}>
      <span>{label}</span>
      <input
        type={type}
        pattern={pattern ? pattern : undefined}
        value={value}
        onChange={(event) => onChange(label.toLowerCase(), event.target.value)}
        style={{ width: inputWidth, height: inputHeight }}
      />
    </div>
  );
};

export default Input;
