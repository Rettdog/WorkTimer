import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Timer } from './Timer';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <h1>Work Timer</h1>
        <Timer></Timer>
      </header>
    </div>
  );
}

export default App;
