import styles from "./Input.module.css";

const Input = ({ label, value, onChange, type = "text", placeholder }) => {
  return (
    <div className={styles.inputGroup}>
      {label && <label>{label}</label>}
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.textarea}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.input}
        />
      )}
    </div>
  );
};

export default Input;
