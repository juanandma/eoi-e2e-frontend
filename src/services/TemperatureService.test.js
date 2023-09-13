import { describe, it, expect } from "vitest";
import { TemperatureService } from "./TemperatureService.js";

describe("TemperatureService", () => {
  it("returns the current temperature", async () => {
    const fetchMock = async () => ({
      json: async () => ({ temperature: 10 }),
    });

    const temperatureService = new TemperatureService(fetchMock);

    const temperature = await temperatureService.getTemperature();

    expect(temperature).toEqual(10);
  });
});
