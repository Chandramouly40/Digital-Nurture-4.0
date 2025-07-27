// src/App.js

import React from 'react';
import './App.css'; // Keep existing CSS import if any
import Posts from './Posts'; // Import your Posts component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog Application</h1>
      </header>
      <main>
        <Posts /> {/* Render your Posts component here */}
      </main>
    </div>
  );
}

export default App;