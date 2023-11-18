import React, { useState } from 'react';


const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');


  const validateInput = () => {
    setResult(null);
    if (!number1.trim() || !number2.trim()) {
      if(!number1.trim()) {
        setErrorMessage('Num 1 Cannot Be Empty');
      } else {
        setErrorMessage('Num 2 Cannot Be Empty');
      }
      return false;
    }


    if (isNaN(number1) || isNaN(number2)) {
      setErrorMessage('Please enter numbers only.');
      return false;
    }


    setErrorMessage('');
    return true;
  };


  const handleOperation = (operation) => {
    if (validateInput()) {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);


      switch (operation) {
        case 'add':
          setResult(num1 + num2);
          break;
        case 'subtract':
          setResult(num1 - num2);
          break;
        case 'multiply':
          setResult(num1 * num2);
          break;
        case 'divide':
          if (num2 !== 0) {
            setResult(num1 / num2);
          } else {
            setErrorMessage('Cannot divide by zero.');
          }
          break;
        default:
          break;
      }
    }
  };


  return (
    <div className='mainBody'>
        <div>
            <h1>React Calculator</h1>
        </div>
      <div>
          <input type="text" placeholder='Num 1' value={number1} onChange={(e) => setNumber1(e.target.value)} />
      </div>
      <div>
          <input type="text" placeholder='Num 2' value={number2} onChange={(e) => setNumber2(e.target.value)} />
      </div>
      <div>
        <button onClick={() => handleOperation('add')}>+</button>
        <button onClick={() => handleOperation('subtract')}>-</button>
        <button onClick={() => handleOperation('multiply')}>*</button>
        <button onClick={() => handleOperation('divide')}>/</button>
      </div>
      {errorMessage && <div style={{ color: 'red', fontWeight: 700, marginTop: '5px'}}>Error!<div style={{ color: 'black' , marginTop: '5px'}}>{errorMessage}</div></div>}
      {result !== null && (
        <div style={{ color: 'blue', fontWeight: 700 , marginTop: '5px'}}>
          Success!
          <div style={{ color: 'black' , marginTop: '5px'}}>Result:- {result}</div>
        </div>
      )}
    </div>
  );
};


export default Calculator;
