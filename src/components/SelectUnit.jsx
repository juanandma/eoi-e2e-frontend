import { AllUnits } from "../models/TemperatureUnit.js";
import * as PropTypes from "prop-types";
import "./SelectUnit.css";

export const SelectUnit = ({ id, label, value, onChange }) => (
  <div className="select-unit">
    <label htmlFor={id}>{label}</label>
    <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
      {AllUnits.map((unit) => (
        <option key={unit} value={unit}>
          {unit}
        </option>
      ))}
    </select>
  </div>
);

SelectUnit.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
