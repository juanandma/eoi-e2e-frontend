import { useEffect, useState } from "react";
import "./App.css";
import { TemperatureUnit, toSymbol } from "./models/TemperatureUnit.js";
import { SelectUnit } from "./components/SelectUnit.jsx";
import { TemperatureInput } from "./components/TemperatureInput.jsx";
import { convert } from "./models/Temperature.js";
import { CurrentTemperature } from "./components/CurrentTemperature.jsx";
import { useDependencies } from "./hooks/useDependencies.js";
import { Button } from "./components/Button.jsx";
import { SelectCountries } from "./components/SelectCountries.jsx";
import { countries } from "./enum/countries.js";

export const App = () => {
  const [currentTemperature, setCurrentTemperature] = useState();
  const [temperature, setTemperature] = useState("");
  const [fromUnit, setFromUnit] = useState(TemperatureUnit.CELSIUS);
  const [toUnit, setToUnit] = useState(TemperatureUnit.CELSIUS);
  const { temperatureService } = useDependencies();
  const [country, setCountry] = useState(Object.keys(countries)[0]);

  const result = convert(parseFloat(temperature), fromUnit, toUnit);

  const getTemperature = (ip = countries[country]) => {
    temperatureService.getTemperature(
      {
        headers: { 'x-forwarded-for': ip },
      }).then((temperature) => {
        setCurrentTemperature(temperature);
        setTemperature(temperature.toString());
      });
  }

  useEffect(() => {
    getTemperature();
  }, []);

  return (
    <main>
      <CurrentTemperature temperature={currentTemperature} />
      <form className="temperature-form">
        <SelectUnit
          id="temperature-from"
          label="From"
          value={fromUnit}
          onChange={setFromUnit}
        />
        <SelectUnit
          id="temperature-to"
          label="To"
          value={toUnit}
          onChange={setToUnit}
        />
        <SelectCountries
          id="countries"
          label="Country"
          value={country}
          countries={countries}
          onChange={setCountry}
        />
        <TemperatureInput
          value={temperature}
          onChange={(temperature) => setTemperature(temperature)}
          unit={fromUnit}
        />
        <Button type="submit" onClick={() => getTemperature()}>
          Get temperature
        </Button>
        <p className="result">
          <span>Conversion result: </span>
          <span>
            {isNaN(result) ? "-" : Math.round(result * 10) / 10}{" "}
            {toSymbol(toUnit)}
          </span>
        </p>
      </form>
    </main >
  );
};
