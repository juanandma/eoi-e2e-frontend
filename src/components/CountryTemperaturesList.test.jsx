import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CountryTemperaturesList from "./CountryTemperaturesList";
import countries from "../enum/countries";


describe("CountryTemperaturesList", () => {
    it("renders a list of country temperatures", async () => {
        render(<CountryTemperaturesList />);
        

        const countryList = screen.getByRole("list");
        expect(countryList).toBeInTheDocument();
    });
    it("renders the temperature for each country in the list", async () => {
        render(<CountryTemperaturesList />);

        for (const countryKey in countries) {
            const countryTemperature = await screen.findByText(`${countryKey}:`);
            expect(countryTemperature).toBeInTheDocument();
        }
    });
    it("renders 'not available' for countries with missing data", async () => {
        render(<CountryTemperaturesList />);

        for (const countryKey in countries) {
            if (!temperatures[countryKey]) {
                const notAvailable = await screen.findByText("Not available");
                expect(notAvailable).toBeInTheDocument();
            }
        }
    });
});