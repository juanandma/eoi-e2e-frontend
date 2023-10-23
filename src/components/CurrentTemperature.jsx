import { toEmoji, toLabel } from "../models/Temperature.js";
import PropTypes from "prop-types";

export const CurrentTemperature = ({ temperature, country }) => {
  const label = `Current weather is ${toLabel(temperature)}`;

  return (
    <div className="current-temperature">
      <h1 aria-label={label}>{toEmoji(temperature)}</h1>
      {temperature === null
        ? <p className="error">Error getting temperature</p>
        : <p>Current temperature is {temperature ?? "-"} ºC <span>in {country}</span></p>
      }
    </div>
  );
};

CurrentTemperature.propTypes = {
  temperature: PropTypes.number,
  country: PropTypes.string,
};
