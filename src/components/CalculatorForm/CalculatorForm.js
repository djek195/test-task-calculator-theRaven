import styles from './CalculatorForm.module.css'
const CalculatorForm = ({
  a,
  b,
  operation,
  setA,
  setB,
  setOperation,
  handleCalculate,
  metamaskConnected,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputs}>
        <input
          placeholder="First number"
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
      
      <div className={styles.inputs}>
        <input
          placeholder="Second number"
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>

      <div className={styles.operation}>
        <label>OPERATION</label>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Addition</option>
          <option value="subtract">Subtraction</option>
          <option value="multiply">Multiplication</option>
          <option value="divide">Division</option>
        </select>
      </div>

      {metamaskConnected && (
        <button className={styles.btn} onClick={handleCalculate}>Calculate</button>
      )}
      {!metamaskConnected && <button className={styles.btn} disabled>Calculate</button>}
    </div>
  );
};

export default CalculatorForm;
