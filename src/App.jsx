
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
import Results from "./components/Results.jsx";


function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
  });

  const inputIsValid=userInput.duration >=1

function handleChange(inputIdentifier,newValue){
  setUserInput((prevUserInput) =>({      
          ...prevUserInput,
          [inputIdentifier]: +newValue,
      
  }));
}
console.log(userInput);
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      
      {inputIsValid && <Results input={userInput}/>}
      {!inputIsValid && <p className="center">Please enter a positive number.</p>}

    </>
  );
}

export default App;

