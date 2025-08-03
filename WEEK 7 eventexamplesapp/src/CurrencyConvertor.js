import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(0);

  const handleInputChange = (event) => {
    setRupees(event.target.value);
  };

  const handleSubmit = () => {
    const euroValue = rupees / 99; 
    setEuros(euroValue.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        value={rupees}
        onChange={handleInputChange}
        placeholder="Enter Rupees"
      />
      <button onClick={handleSubmit}>Convert</button>
      <h3>Euros: €{euros}</h3>
    </div>
  );
}

export default CurrencyConvertor;