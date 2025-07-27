// src/App.js

import React from 'react';
import './App.css'; // You can keep or remove this if not used
import CohortDetails from './CohortDetails'; // Import the CohortDetails component

function App() {
  // Dummy data to simulate the cohorts [cite: 15, 16]
  const cohorts = [
    {
      id: '1',
      name: 'INTADMFD10 - .NET FSD',
      startDate: '22-Feb-2022',
      status: 'Scheduled',
      coach: 'Aathma',
      trainer: 'Jojo Jose',
    },
    {
      id: '2',
      name: 'ADM21JF014 - Java FSD',
      startDate: '10-Sep-2021',
      status: 'Ongoing',
      coach: 'Apoorv',
      trainer: 'Elisa Smith',
    },
    {
      id: '3',
      name: 'CDBJF21025 -Java FSD',
      startDate: '24-Dec-2021',
      status: 'Ongoing',
      coach: 'Aathma',
      trainer: 'John Doe',
    },
  ];

  return (
    <div className="App">
      <header className="App-header" style={{ textAlign: 'left', padding: '20px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
        <h1>Cohorts Details</h1>
      </header>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
        {cohorts.map(cohort => (
          <CohortDetails key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;