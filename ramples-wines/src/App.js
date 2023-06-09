import React from 'react';
import DisplayLiquor from './components/DisplayLiquor';
import './App.css';
import NavBar from './components/NavBar';
import LiquorTable from './components/TableLiquor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddLiquorForm from './components/AddLiquorForm';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
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
  <Route path="/form" element={ <AddLiquorForm />}>
  </Route>
  <Route path="/feedback-form" element={ <FeedbackForm />}>
  </Route>
  </Routes>
  </BrowserRouter>
  <Footer />
  </div>
  );
}
export default App;