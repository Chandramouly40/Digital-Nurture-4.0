import React from 'react';
import './App.css';

function App() {
  const officeSpaces = [
    { name: 'DBS', rent: 50000, address: 'Chennai' },
    { name: 'WeWork', rent: 75000, address: 'Mumbai' },
    { name: 'Regus', rent: 59000, address: 'Delhi' },
    { name: 'Cowrks', rent: 65000, address: 'Bangalore' },
  ];

  const officeImage = {
    src: 'https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Modern office space reception',
    width: '400px'
  };

  return (
    <div className="App">
      <h1>Office Space, at Affordable Range</h1>
      <img src={officeImage.src} alt={officeImage.alt} width={officeImage.width} />

      {officeSpaces.map((space, index) => {
        const rentStyle = {
          color: space.rent <= 60000 ? 'red' : 'green'
        };

        return (
          <div key={index} className="office-card">
            <h2>Name: {space.name}</h2>
            <h3 style={rentStyle}>Rent: Rs. {space.rent}</h3>
            <h3>Address: {space.address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;