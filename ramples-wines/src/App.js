import React from 'react';
import DisplayLiquor from './components/DisplayLiquor';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <DisplayLiquor />
    </div>
  );
}

export default App;
