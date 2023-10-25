import { useState } from "react";
import { TemperatureUnit, toSymbol } from "../models/TemperatureUnit.js";
import { SelectUnit } from "../components/SelectUnit.jsx";
import { TemperatureInput } from "../components/TemperatureInput.jsx";
import { convert } from "../models/Temperature.js";
import { CurrentTemperature } from "../components/CurrentTemperature.jsx";
import { Button } from "../components/Button.jsx";
import { SelectCountries } from "../components/SelectCountries.jsx";
import { useCountries } from "../hooks/useCountries.js";

const HomeView = () => {
  const { countries } = useCountries();
  const [country, setCountry] = useState(countries[0]);
  const [lastCountry, setLastCountry] = useState(country);
  const [temperature, setTemperature] = useState(
    lastCountry.temperature.toString(),
  );
  const [fromUnit, setFromUnit] = useState(TemperatureUnit.CELSIUS);
  const [toUnit, setToUnit] = useState(TemperatureUnit.CELSIUS);

  const result = convert(parseFloat(temperature), fromUnit, toUnit);

  const getTemperature = async () => {
    try {
      setLastCountry(country);
      setTemperature(country.temperature.toString());
      setFromUnit(TemperatureUnit.CELSIUS);
      setToUnit(TemperatureUnit.CELSIUS);
    } catch (error) {
      console.error("Error fetching temperature:", error);
    }
  };

  return (
    <main>
      <CurrentTemperature
        temperature={lastCountry.temperature}
        country={lastCountry.name}
      />
      <form className="temperature-form" onSubmit={(e) => e.preventDefault()}>
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
        <Button onClick={() => getTemperature()} type="submit">
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
    </main>
  );
};

export default HomeView;
