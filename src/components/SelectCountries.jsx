import * as PropTypes from "prop-types";
import "./SelectCountries.css";


export const SelectCountries = ({ id, value, label, countries, onChange }) => (
  <div className="select-countries">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      value={value.name}
      onChange={(e) => {
        const country = countries.find(
          (country) => country.name === e.target.value
        );
        onChange(country);
      }}
    >
        {countries.map((country) => (
            <option key={country.id} value={country.name}>
                {country.name}
            </option>
        ))}
    </select>
  </div>
);

SelectCountries.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired,
    })
    ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
  })
};
