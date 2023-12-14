import React from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./Components/Sidebar/Dashboard/Dashboard"
import LandingPage from "./Components/Sidebar/LandingPage/LandingPage"
import MyVehicle from './Components/Sidebar/Vehicle';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicle" element={<MyVehicle/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
