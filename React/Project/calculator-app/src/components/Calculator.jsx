import Display from "./Display";
import Button from "./Button";
import styles from "./Calculator.module.css";
function Calculator() {
  let label = [
    "C",
    "1",
    "2",
    "-",
    "3",
    "4",
    "*",
    "5",
    "6",
    "/",
    "7",
    "8",
    "+",
    "9",
    "0",
    "=",
  ];
  return (
    <div className={styles.calculator} id="calculator">
      <Display />
      <Button label={label} />
    </div>
  );
}

export default Calculator;
