import { AllUnits, toSymbol } from "../models/TemperatureUnit.js";
import * as PropTypes from "prop-types";
import "./TemperatureInput.css";

export const TemperatureInput = ({ onChange, unit, value }) => (
  <div className="temperature-input">
    <label htmlFor="degrees">Degrees</label>
    <div className="input-and-symbol">
      <input
        id="degrees"
        type="text"
        value={value}
        pattern="[0-9]*[.]?[0-9]*"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter degrees"
      />
      <span className="unit-symbol">{toSymbol(unit)}</span>
    </div>
  </div>
);

TemperatureInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  unit: PropTypes.oneOf(AllUnits),
};
