import { describe, it, expect } from "vitest";
import { convert, toEmoji, toLabel } from "./Temperature.js";
import { TemperatureUnit } from "./TemperatureUnit.js";

describe("Temperature", () => {
  describe("convert", () => {
    describe("from celsius", () => {
      const from = TemperatureUnit.CELSIUS;

      it("to celsius", () => {
        const to = TemperatureUnit.CELSIUS;

        const result = convert(0, from, to);

        expect(result).toBe(0);
      });

      it("to fahrenheit", () => {
        const to = TemperatureUnit.FAHRENHEIT;

        const result = convert(0, from, to);

        expect(result).toBe(32);
      });

      it("to kelvin", () => {
        const to = TemperatureUnit.KELVIN;

        const result = convert(0, from, to);

        expect(result).toBe(273.15);
      });
    });

    describe("from fahrenheit", () => {
      const from = TemperatureUnit.FAHRENHEIT;

      it("to celsius", () => {
        const to = TemperatureUnit.CELSIUS;

        const result = convert(0, from, to);

        expect(result).toBeCloseTo(-17.77777, 4);
      });

      it("to fahrenheit", () => {
        const to = TemperatureUnit.FAHRENHEIT;

        const result = convert(0, from, to);

        expect(result).toBe(0);
      });

      it("to kelvin", () => {
        const to = TemperatureUnit.KELVIN;

        const result = convert(0, from, to);

        expect(result).toBeCloseTo(255.3722, 4);
      });
    });

    describe("from kelvin", () => {
      const from = TemperatureUnit.KELVIN;

      it("to celsius", () => {
        const to = TemperatureUnit.CELSIUS;

        const result = convert(0, from, to);

        expect(result).toBe(-273.15);
      });

      it("to fahrenheit", () => {
        const to = TemperatureUnit.FAHRENHEIT;

        const result = convert(0, from, to);

        expect(result).toBeCloseTo(-459.67, 4);
      });

      it("to kelvin", () => {
        const to = TemperatureUnit.KELVIN;

        const result = convert(0, from, to);

        expect(result).toBe(0);
      });
    });

    it("returns 0 if null", () => {
      const degrees = null;
      const from = TemperatureUnit.CELSIUS;
      const to = TemperatureUnit.FAHRENHEIT;

      const result = convert(degrees, from, to);

      expect(result).toBe(0);
    });

    it("throws an error if unknown unit", () => {
      const degrees = 0;
      const from = "unknown";
      const to = TemperatureUnit.FAHRENHEIT;

      expect(() => convert(degrees, from, to)).toThrowError(
        `Unknown conversion from ${from} to ${to}`,
      );
    });
  });

  describe("toEmoji", () => {
    it.each([
      [-10, "🧊"],
      [0, "🥶"],
      [10, "😨"],
      [15, "😬"],
      [20, "😌"],
      [30, "🥵"],
      [40, "🔥"],
      [null, "🤷"],
    ])(`for %s returns %s`, (degrees, expected) => {
      const result = toEmoji(degrees);

      expect(result).toBe(expected);
    });
  });

  describe("toLabel", () => {
    it.each([
      [-10, "freezing"],
      [0, "cold"],
      [10, "chilly"],
      [15, "mild"],
      [20, "warm"],
      [30, "hot"],
      [40, "scorching"],
      [null, "unknown"],
    ])(`for %s returns %s`, (degrees, expected) => {
      const result = toLabel(degrees);

      expect(result).toBe(expected);
    });
  });
});
