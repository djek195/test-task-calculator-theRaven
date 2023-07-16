import styles from './CalculatorResult.module.css'

const CalculatorResult = ({ result }) => {
  return (
    <div className={styles.container}>
      <h3>Result: {result}</h3>
    </div>
  );
};

export default CalculatorResult;