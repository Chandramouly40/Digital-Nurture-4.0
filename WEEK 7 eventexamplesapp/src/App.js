import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(currentCount => currentCount + 1);
  };

  const decrement = () => {
    setCount(currentCount => currentCount - 1);
  };

  const sayHello = (currentValue) => {
    alert(`Hello Member : ${currentValue}`);
  };

  const handleIncrementClick = () => {
    const newCount = count + 1;
    increment();
    sayHello(newCount);
  };

  const handleWelcome = (message) => {
    alert(message);
  };

  const handlePress = (event) => {
    console.log(event);
    alert("I was clicked");
  };

  return (
    <div className="App">
      <div className="card">
        <h2>Counter</h2>
        <h3>{count}</h3>
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div className="card">
        <h2>Event Handlers</h2>
        <button onClick={() => handleWelcome('welcome')}>Say Welcome</button>
        <button onClick={handlePress}>OnPress</button>
      </div>

      <div className="card">
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;