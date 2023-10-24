import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TemperatureOldView from "./views/TemperatureOldView.jsx";
import CountryView from "./views/CountryView.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemperatureOldView />} />
        <Route path="/list" element={<CountryView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
