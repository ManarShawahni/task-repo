import styles from "./Dialog.module.css";

const Dialog = ({ title, children, onCancel, onConfirm }) => {
  
  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        {title && <h3>{title}</h3>}
        <div className={styles.content}>{children}</div>
        <div className={styles.actions}>
          <button className={styles.cancel} onClick={onCancel}>
            Cancel
          </button>
          {onConfirm && (
            <button className={styles.confirm} onClick={onConfirm}>
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
