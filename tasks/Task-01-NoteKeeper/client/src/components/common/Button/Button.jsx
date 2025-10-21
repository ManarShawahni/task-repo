import styles from "./Button.module.css";

const Button = ({ onClick, children, variant = "primary", ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
