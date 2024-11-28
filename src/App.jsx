import React, { useState } from "react";
import Form from "./components/Form";
import ResultTable from "./components/ResultTable";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange({ target }) {
    setInputs((prevState) => {
      return { ...prevState, [target.name]: Number(target.value) };
    });
  }

  return (
    <main>
      <Form {...inputs} onChange={handleChange} />
      <ResultTable data={inputs} />
    </main>
  );
}

export default App;
