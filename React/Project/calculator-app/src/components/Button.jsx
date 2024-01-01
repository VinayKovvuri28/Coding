import styles from "./Button.module.css";
function Button({ label }) {
  return (
    <div className={styles.buttonDiv}>
      {label.map((buttonName) => (
        <button
          key={buttonName.key}
          type="button"
          id="button"
          className={" ${styles.calButton} btn btn-dark "}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}

export default Button;
