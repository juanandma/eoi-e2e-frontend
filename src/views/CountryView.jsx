import CountryTemperaturesList from "../components/CountryTemperaturesList";
import { useCountries } from "../hooks/useCountries.js";

const CountryView = () => {
  const { countries, deleteCountry, addCountry } = useCountries();

  return (
    <div>
      <h1>Country Temperatures List</h1>
      <CountryTemperaturesList
        countries={countries}
        deleteCountry={deleteCountry}
      />
    </div>
  );
};

export default CountryView;
