import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import TimeMenu from "./components/TimeMenu";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/timemenu" element={<TimeMenu />} />
      
    
    </Routes>
  );
}

export default App;
