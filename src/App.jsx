import React, { useState } from "react";
import Header from "./component/Header";
import UserInput from "./component/UserInput";
import { calculateInvestmentResults } from "./util/investment";
import ResultTable from "./component/ResultTable";
function App() {
  const [userInput, setUserInput] = useState(null);

  function handleUserInputChange(newInput) {
    setUserInput(newInput);
  }
  let results = [];
  if (userInput) {
    results = calculateInvestmentResults(userInput);
    console.log(results);
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={handleUserInputChange} />
      <ResultTable results={results} userInput={userInput} />
    </>
  );
}

export default App;
