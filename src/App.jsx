import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView.jsx";
import CountryView from "./views/CountryView.jsx";
import FormView from "./views/FormView.jsx";
import Header from "./components/Header";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/list" element={<CountryView />} />
          <Route path="/form" element={<FormView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
