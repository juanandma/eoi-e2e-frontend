import { TemperatureUnit } from "./TemperatureUnit.js";

function celsiusToFahrenheit(degrees) {
  return degrees * 1.8 + 32;
}

function celsiusToKelvin(degrees) {
  return degrees + 273.15;
}

function fromCelsiusTo(degrees, to) {
  if (to === TemperatureUnit.FAHRENHEIT) {
    return celsiusToFahrenheit(degrees);
  }

  if (to === TemperatureUnit.KELVIN) {
    return celsiusToKelvin(degrees);
  }

  return degrees;
}

function fahrenheitToCelsius(degrees) {
  return (degrees - 32) / 1.8;
}

function kelvinToCelsius(degrees) {
  return degrees - 273.15;
}

function fromFahrenheitTo(degrees, to) {
  if (to === TemperatureUnit.CELSIUS) {
    return fahrenheitToCelsius(degrees);
  }

  if (to === TemperatureUnit.KELVIN) {
    const inCelsius = fahrenheitToCelsius(degrees);
    return fromCelsiusTo(inCelsius, TemperatureUnit.KELVIN);
  }

  return degrees;
}

function fromKelvinTo(degrees, to) {
  if (to === TemperatureUnit.CELSIUS) {
    return kelvinToCelsius(degrees);
  }

  if (to === TemperatureUnit.FAHRENHEIT) {
    const inCelsius = kelvinToCelsius(degrees);
    return fromCelsiusTo(inCelsius, TemperatureUnit.FAHRENHEIT);
  }

  return degrees;
}

export function convert(degrees, from, to) {
  if (degrees == null) {
    return 0;
  }

  if (from === to) {
    return degrees;
  }

  if (from === TemperatureUnit.CELSIUS) {
    return fromCelsiusTo(degrees, to);
  }

  if (from === TemperatureUnit.FAHRENHEIT) {
    return fromFahrenheitTo(degrees, to);
  }

  if (from === TemperatureUnit.KELVIN) {
    return fromKelvinTo(degrees, to);
  }

  throw new Error(`Unknown conversion from ${from} to ${to}`);
}

/**
 * Returns an emoji that represents the temperature.
 * @param {number} temperature The temperature in Celsius.
 */
export function toEmoji(temperature) {
  if (temperature == null) {
    return "🤷";
  }

  if (temperature <= -10) {
    return "🧊";
  }

  if (temperature <= 5) {
    return "🥶";
  }

  if (temperature <= 10) {
    return "😨";
  }

  if (temperature <= 15) {
    return "😬";
  }

  if (temperature < 26) {
    return "😌";
  }

  if (temperature < 35) {
    return "🥵";
  }

  return "🔥";
}

/**
 * Returns a label that represents the temperature.
 * Current weather is...
 * @param {number} temperature The temperature in Celsius.
 */
export function toLabel(temperature) {
  if (temperature == null) {
    return "unknown";
  }

  if (temperature <= -10) {
    return "freezing";
  }

  if (temperature <= 5) {
    return "cold";
  }

  if (temperature <= 10) {
    return "chilly";
  }

  if (temperature <= 15) {
    return "mild";
  }

  if (temperature < 26) {
    return "warm";
  }

  if (temperature < 35) {
    return "hot";
  }

  return "scorching";
}
