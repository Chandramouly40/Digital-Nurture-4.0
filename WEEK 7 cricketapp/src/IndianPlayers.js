import React from 'react';

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];


export const IndianPlayersList = [...T20Players, ...RanjiTrophyPlayers];


export function OddPlayers({players}) {
  const [first, , third, , fifth] = players;
  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  )
}


export function EvenPlayers({players}) {
  const [, second, , fourth, , sixth] = players;
  return (
    <div>
      <h2>Even Players</h2>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}


export function ListofIndianPlayers({players}) {
  return (
    <div>
      <h2>List of Indian Players Merged:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  )
}