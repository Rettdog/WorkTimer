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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
