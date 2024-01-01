import styles from "./Display.module.css";
function Display() {
  return (
    <div className={styles.displayDiv}>
      <input type="text" className="w-100" id="display" readOnly />
    </div>
  );
}
export default Display;
