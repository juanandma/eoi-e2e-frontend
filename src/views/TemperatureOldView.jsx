import React, { useEffect, useState } from "react";
import { TemperatureUnit, toSymbol } from "../models/TemperatureUnit.js";
import { SelectUnit } from "../components/SelectUnit.jsx";
import { TemperatureInput } from "../components/TemperatureInput.jsx";
import { convert } from "../models/Temperature.js";
import { CurrentTemperature } from "../components/CurrentTemperature.jsx";
import { useDependencies } from "../hooks/useDependencies.js";
import { Button } from "../components/Button.jsx";
import { SelectCountries } from "../components/SelectCountries.jsx";
import { countries } from "../enum/countries.js";

const TemperatureOldView = () => {
  const [currentTemperature, setCurrentTemperature] = useState();
  const [temperature, setTemperature] = useState("");
  const [fromUnit, setFromUnit] = useState(TemperatureUnit.CELSIUS);
  const [toUnit, setToUnit] = useState(TemperatureUnit.CELSIUS);
  const { temperatureService } = useDependencies();
  const [country, setCountry] = useState(Object.keys(countries)[0]);
  const [countryText, setCountryText] = useState(country);

  const result = convert(parseFloat(temperature), fromUnit, toUnit);

  const getTemperature = async (ip = countries[country]) => {
    try {
      const temperature = await temperatureService.getTemperature({
        headers: { 'x-forwarded-for': ip },
      });
      setCurrentTemperature(temperature);
      setTemperature(temperature.toString());
      setCountryText(country);
    } catch (error) {
      console.table(error);
      setCurrentTemperature(null);
      setTemperature("");
    }
  };

  useEffect(() => {
    getTemperature();
  }, []);

  return (
    <main>
      <CurrentTemperature temperature={currentTemperature} country={countryText} />
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

export default TemperatureOldView;
