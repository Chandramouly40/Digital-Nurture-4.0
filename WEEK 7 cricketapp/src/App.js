import React from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import { OddPlayers, EvenPlayers, ListofIndianPlayers, IndianPlayersList } from './IndianPlayers';

function App() {

  const flag = true;

  if (flag) {
    return (
      <div className="App">
        <ListofPlayers />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Indian Team</h1>
        <hr />
        <OddPlayers players={IndianPlayersList} />
        <hr />
        <EvenPlayers players={IndianPlayersList} />
        <hr />
        <ListofIndianPlayers players={IndianPlayersList} />
      </div>
    );
  }
}

export default App;