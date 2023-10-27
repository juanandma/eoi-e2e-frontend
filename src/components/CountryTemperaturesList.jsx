import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toSymbol, TemperatureUnit } from '../models/TemperatureUnit';
import MaxTemperatureFilter from './MaxTemperatureFilter';
import DeleteCountryButton from './DeleteCountryButton';

const CountryTemperaturesList = ({ countries = [], deleteCountry }) => {
  const [maxTemperature, setMaxTemperature] = useState(null);

  const filteredCountries = maxTemperature !== null && maxTemperature !== ''
    ? countries.filter((country) => country.temperature !== null && country.temperature <= (maxTemperature === 0 ? 0 : maxTemperature))
    : countries;

  return (
    <div className="countryList">
      <MaxTemperatureFilter maxTemperature={maxTemperature} setMaxTemperature={setMaxTemperature} />
      <ul>
        {filteredCountries.map((country) => (
          <li className="countryListItem" key={country.id}>
            {country.name}:{' '}
            {country.temperature !== null
              ? `${country.temperature} ${toSymbol(TemperatureUnit.CELSIUS)}`
              : 'Not available'}
            <DeleteCountryButton country={country} deleteCountry={deleteCountry} />
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
