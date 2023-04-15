import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import NavBar from './components/NavBar';
import PastEntries from './components/PastEntries';
import About from './components/About';
import Today from './components/Today';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="today" element={<Today />} />
          <Route path="pastentries" element={<PastEntries />} >
          </Route>
      </Routes>
    </div>
  );
}

export default App;