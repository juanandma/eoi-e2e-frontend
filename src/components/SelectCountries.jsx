import * as PropTypes from "prop-types";
import "./SelectCountries.css";


export const SelectCountries = ({ id, value, label, countries, onChange }) => (
  <div className="select-countries">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {Object.keys(countries).map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  </div>
);

SelectCountries.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  countries: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
