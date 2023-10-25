import React, { useState, useEffect } from "react";
import { useDependencies } from "../hooks/useDependencies";
import { countries } from "../enum/countries";
import { TemperatureUnit, toSymbol } from "../models/TemperatureUnit";

const CountryTemperaturesList = () => {
  const { temperatureService } = useDependencies();
  const [temperatures, setTemperatures] = useState({});

  useEffect(() => {
    const fetchTemperatures = async () => {
      const temperatureData = {};
      for (const countryKey in countries) {
        try {
          const ip = countries[countryKey];
          const temperature = await temperatureService.getTemperature({
            headers: { "x-forwarded-for": ip },
          });
          temperatureData[countryKey] = temperature;
        } catch (error) {
          console.error(`Error fetching temperature for ${countryKey}:`, error);
          temperatureData[countryKey] = null;
        }
      }
      setTemperatures(temperatureData);
    };

    fetchTemperatures();
  }, [temperatureService]);

  return (
    <ul>
      {Object.keys(countries).map((countryKey) => (
        <li key={countryKey}>
          {countryKey}:{" "}
          {temperatures[countryKey] !== null
            ? `${temperatures[countryKey]} ${toSymbol(TemperatureUnit.CELSIUS)}`
            : "Not available"}
        </li>
      ))}
    </ul>
  );
};

export default CountryTemperaturesList;
