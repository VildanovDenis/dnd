import React from 'react';
// import logo from './logo.svg';

import { DndContainer } from './Containers/DndContainer/index.tsx';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <main>
        <DndContainer />
      </main>
    </div>
  );
}

export default App;