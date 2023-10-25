import { TemperatureUnit, toSymbol } from "../models/TemperatureUnit";
import PropTypes from "prop-types";

const CountryTemperaturesList = ({ countries, deleteCountry }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>
          {country.name}:{" "}
          {country.temperature !== null
            ? `${country.temperature} ${toSymbol(TemperatureUnit.CELSIUS)}`
            : "Not available"}
          <button onClick={() => deleteCountry(country.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

CountryTemperaturesList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
    }),
  ).isRequired,
  deleteCountry: PropTypes.func.isRequired,
};

export default CountryTemperaturesList;
