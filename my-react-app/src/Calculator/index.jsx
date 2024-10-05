import React, { useState } from 'react';
import './style.scss';

function Calculator() {
  const [inputString, setInputString] = useState('');
  const [result, setResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [showResult, setShowResult] = useState(false)

  const handleInputChange = (event) => {
    let value = event.target.value.trim();
  
    if (/[a-zA-Z]/.test(value.replace(/\\n/g, ","))) {
      setErrorMessage("Invalid input: alphabets are not allowed.");
    }else{
      setErrorMessage(null)
    }
    setInputString(value);
    if(value.length == 0){
      setResult(0)
      setShowResult(false)
    }
  };

  const add = () => {
    setErrorMessage(null);
    if (inputString === '') {
      setResult(0);
      setShowResult(true)  
       return;
    }
    let numbersString = inputString.replace(/^['"]+|['"]+$/g, '')
    if (numbersString.startsWith("//")) {
      let delimiter = numbersString.substring(2);
      numbersString = delimiter.replace(/;/g, ",");
    }

    const numbers = numbersString.replace(/\\n/g, ",").split(",").map(Number); 
    
    const negativeNumbers = numbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      setErrorMessage(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
      return;   
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    if (isNaN(sum)) {
      setErrorMessage("Invalid input: could not calculate the sum.");
      return;
    }
    setResult(sum);
    setShowResult(true)
  };

  return (
    <section className='string-calculator'>
      <label htmlFor="numbers-input" className="input-label">
        Enter numbers:
      </label>
      <input id="numbers-input" type="text" value={inputString} onChange={handleInputChange} />
      <button onClick={add} disabled={errorMessage}>Calculate</button>
      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}
      {!errorMessage && showResult && <div className='result'>{`Result: ${result}`}</div>}
    </section>
  );
}

export default Calculator;