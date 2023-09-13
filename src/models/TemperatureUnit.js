export const TemperatureUnit = {
  CELSIUS: "Celsius",
  FAHRENHEIT: "Fahrenheit",
  KELVIN: "Kelvin",
};

export function toSymbol(unit) {
  switch (unit) {
    case TemperatureUnit.CELSIUS:
      return "°C";
    case TemperatureUnit.FAHRENHEIT:
      return "°F";
    case TemperatureUnit.KELVIN:
      return "K";
    default:
      throw new Error(`Unknown unit: ${unit}`);
  }
}

export const AllUnits = Object.values(TemperatureUnit);
