import './App.css';
import Header from './Components/Header.jsx';
import Results from './Components/Results.jsx';
import UserInput from './Components/UserInput.jsx';
import { useState } from 'react';




function App() {

  const [userInput,setUserInput]=useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  
  function handleChange(inputIdentifier,newValue){
    setUserInput((prevUserInput)=>
    {
        return{
            ...prevUserInput,
            [inputIdentifier]:+newValue,
        };
    });
  
  }

  

  return (
    <div className="App">
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className='center'>Please enter a duration greater than zero </p>}
      {inputIsValid && <Results input= {userInput}/>}
    </div>
  );
}

export default App;
