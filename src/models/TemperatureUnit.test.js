import { describe, it, expect } from "vitest";
import { TemperatureUnit, toSymbol } from "./TemperatureUnit.js";

describe("TemperatureUnit", () => {
  describe("toSymbol", () => {
    it("works with celsius", () => {
      const unit = TemperatureUnit.CELSIUS;

      const result = toSymbol(unit);

      expect(result).toBe("°C");
    });

    it("works with fahrenheit", () => {
      const unit = TemperatureUnit.FAHRENHEIT;

      const result = toSymbol(unit);

      expect(result).toBe("°F");
    });

    it("works with kelvin", () => {
      const unit = TemperatureUnit.KELVIN;

      const result = toSymbol(unit);

      expect(result).toBe("K");
    });
  });
});
