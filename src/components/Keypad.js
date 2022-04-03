import { useState } from "react";
import styles from "./keypad.module.css";
function Keypad() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
    }
  };
  return (
    <div className={styles.keypad}>
      {/* <div className={styles.result}>{result}</div> */}
      <form>
        <input type="text" value={result} readOnly></input>
      </form>
      <div>
        <div>
          <button onClick={clear} className={styles.button3}>
            AC
          </button>
          <button onClick={backspace} className={styles.button4}>
            backspace
          </button>
          <button onClick={handleClick} name="/" className={styles.button3}>
            /
          </button>
        </div>
        <div>
          <button onClick={handleClick} name="7" className={styles.button}>
            7
          </button>
          <button onClick={handleClick} name="8" className={styles.button}>
            8
          </button>
          <button onClick={handleClick} name="9" className={styles.button}>
            9
          </button>
          <button onClick={handleClick} name="*" className={styles.button3}>
            *
          </button>
        </div>
        <div>
          <button onClick={handleClick} name="4" className={styles.button}>
            4
          </button>
          <button onClick={handleClick} name="5" className={styles.button}>
            5
          </button>
          <button onClick={handleClick} name="6" className={styles.button}>
            6
          </button>
          <button onClick={handleClick} name="-" className={styles.button3}>
            -
          </button>
        </div>
        <div>
          <button onClick={handleClick} name="1" className={styles.button}>
            1
          </button>
          <button onClick={handleClick} name="2" className={styles.button}>
            2
          </button>
          <button onClick={handleClick} name="3" className={styles.button}>
            3
          </button>
          <button onClick={handleClick} name="+" className={styles.button3}>
            +
          </button>
        </div>
        <div>
          <button onClick={handleClick} name="0" className={styles.button4}>
            0
          </button>
          <button onClick={calculate} className={styles.button1}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Keypad;
