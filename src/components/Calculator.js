import styles from "./Calculator.module.css";
import Keypad from "./Keypad";

function Calculator() {
  return (
    <div className={styles.container}>
      <Keypad />
    </div>
  );
}

export default Calculator;
