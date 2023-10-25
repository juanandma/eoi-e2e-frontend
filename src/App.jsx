import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView.jsx";
import CountryView from "./views/CountryView.jsx";
import { NewCountryForm } from "./components/NewCountryForm";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/list" element={<CountryView />} />
          <Route path="/form" element={<NewCountryForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
