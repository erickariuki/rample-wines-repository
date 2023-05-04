import React from 'react';
import DisplayLiquor from './components/DisplayLiquor';
import './App.css';
import NavBar from './components/NavBar';
import LiquorTable from './components/TableLiquor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
    <BrowserRouter>
  <NavBar />
  <Routes>
  <Route path="/" element={ <DisplayLiquor />}>
  </Route>
  <Route path="/products" element={ <DisplayLiquor />}>
  </Route>
  <Route path="/table" element={ <LiquorTable />}>
  </Route>
  </Routes>
  </BrowserRouter>
  </div>
  );
}
export default App;