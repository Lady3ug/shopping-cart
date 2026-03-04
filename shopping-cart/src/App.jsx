import { useState } from "react";
import BudgetForm from "./components/BudgetForm";
import Results from "./components/Results";

function App() {
  const [data, setData] = useState(null);

  const handleCalculate = (formData) => {
    setData(formData);
  };

  return (
    <div>
      <h1>Budget & Savings Predictor</h1>
      <BudgetForm onSubmit={handleCalculate} />
      {data && <Results {...data} />}
    </div>
  );
}

export default App;
