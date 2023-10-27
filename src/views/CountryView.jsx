import React from 'react';
import CountryTemperaturesList from '../components/CountryTemperaturesList';
import { useCountries } from '../hooks/useCountries';

const CountryView = () => {
  const { countries, deleteCountry } = useCountries();

  return (
    <div>
      <CountryTemperaturesList
        countries={countries}
        deleteCountry={deleteCountry}
      />
    </div>
  );
};

export default CountryView;