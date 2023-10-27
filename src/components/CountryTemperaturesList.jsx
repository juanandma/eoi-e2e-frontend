import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toSymbol, TemperatureUnit } from '../models/TemperatureUnit';

const CountryTemperaturesList = ({ countries = [], deleteCountry }) => {
  const [maxTemperature, setMaxTemperature] = useState(null);

  const filteredCountries = maxTemperature
    ? countries.filter((country) => country.temperature !== null && country.temperature <= maxTemperature)
    : countries;

  return (
    <div className="countryList">
      <div>
        <label htmlFor="maxTemperature">Max Temperature Filter: </label>
        <input
          type="number"
          id="maxTemperature"
          value={maxTemperature || ''}
          onChange={(e) => setMaxTemperature(Math.min(100, e.target.value))}
          placeholder="None"
          max={100}
        />
      </div>
      <ul>
        {filteredCountries.map((country) => (
          <li className="countryListItem" key={country.id}>
            {country.name}:{' '}
            {country.temperature !== null
              ? `${country.temperature} ${toSymbol(TemperatureUnit.CELSIUS)}`
              : 'Not available'}
            <button className="deleteButton" onClick={() => deleteCountry(country.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

CountryTemperaturesList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteCountry: PropTypes.func.isRequired,
};

export default CountryTemperaturesList;