import "./App.css";
import { useState, useEffect } from "react";
import Web3 from "web3";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import CalculatorResult from "./components/CalculatorResult/CalculatorResult";
import CalculatorUsageCount from "./components/CalculatorUsageCount/CalculatorUsageCount";
import calculatorABI from "./calculatorABI.json";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [usageCount, setUsageCount] = useState(0);
  const [metamaskConnected, setMetamaskConnected] = useState(false);
  const [calculatorContract, setCalculatorContract] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkMetamaskConnection();
    setupCalculatorContract();
  }, []);

  const checkMetamaskConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setMetamaskConnected(true);
      } else {
        setMetamaskConnected(false);
        setResult(
          <>
            <p><span>Warning:</span> Please check your authorization in Metamask
            and connection to the test wallet and refresh the page.</p>
          </>
        );
      }
    } else {
      setResult(
        <>
          <p><span>Warning:</span> Please make sure you have installed the Metamask
          extension for your browser, logged in, and are using a test wallet and
          refresh the page.</p>
        </>
      );
    }
  };

  const setupCalculatorContract = async () => {
    const calculatorAddress = "0x1851ffBce02A134eFd9ddBC91920b0c6DCEfB6f5";

    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(calculatorABI, calculatorAddress);
      setCalculatorContract(contract);
    }
  };

  const fetchUsageCount = async () => {
    if (calculatorContract) {
      const count = await calculatorContract.methods.usageCount().call();
      setUsageCount(parseInt(count));
    }
  };

  const handleCalculate = async () => {
    if (!metamaskConnected) return;

    if (!a || !b) {
      setResult("Please enter both numbers");
      return;
    }

    try {
      setLoading(true);
      let calculationResult;

      switch (operation) {
        case "add":
          await calculatorContract.methods
            .add(a.toString(), b.toString())
            .send({ from: window.ethereum.selectedAddress });

          calculationResult = await calculatorContract.methods
            .add(a.toString(), b.toString())
            .call();
          break;
        case "subtract":
          await calculatorContract.methods
            .subtract(a.toString(), b.toString())
            .send({ from: window.ethereum.selectedAddress });

          calculationResult = await calculatorContract.methods
            .subtract(a.toString(), b.toString())
            .call();
          break;
        case "multiply":
          await calculatorContract.methods
            .multiply(a.toString(), b.toString())
            .send({ from: window.ethereum.selectedAddress });

          calculationResult = await calculatorContract.methods
            .multiply(a.toString(), b.toString())
            .call();
          break;
        case "divide":
          await calculatorContract.methods
            .divide(a.toString(), b.toString())
            .send({ from: window.ethereum.selectedAddress });

          calculationResult = await calculatorContract.methods
            .divide(a.toString(), b.toString())
            .call();
          break;
        default:
          setResult("Invalid operation");
          return;
      }

      setResult(calculationResult.toString());
      fetchUsageCount();
    } catch (error) {
      setResult("Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <h1>Calculator</h1>

      <CalculatorForm
        a={a}
        b={b}
        operation={operation}
        setA={setA}
        setB={setB}
        setOperation={setOperation}
        handleCalculate={handleCalculate}
        metamaskConnected={metamaskConnected}
      />

      {loading && <div className="loader"></div>}

      <CalculatorResult result={result} />

      {metamaskConnected && <CalculatorUsageCount usageCount={usageCount} />}
    </div>
  );
}

export default App;
