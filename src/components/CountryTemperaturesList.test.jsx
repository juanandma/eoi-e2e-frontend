import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CountryTemperaturesList from "./CountryTemperaturesList";



describe("CountryTemperaturesList", () => {
    let countries;

    beforeEach(() => {
        const deleteCountry = () => { };
        const countries = [
            { id: "1", name: "Spain", temperature: 30 },
            { id: "2", name: "France", temperature: 20 },
            { id: "3", name: "Germany", temperature: 10 },
            { id: "4", name: "Alaska", temperature: 0 },
            { id: "5", name: "Greenland", temperature: -20 },
            { id: "6", name: "Russia", temperature: 1 },
            { id: "7", name: "Iceland", temperature: -1 },
        ]
        render(<CountryTemperaturesList countries={countries} deleteCountry={deleteCountry} />);
    })

    it("renders a list of country temperatures", async () => {

        const countryList = screen.getByRole("list");
        expect(countryList).toBeInTheDocument();
    });

    it("renders the temperature for each country in the list", async () => {

        for (const countryKey in countries) {
            const country = countries[countryKey];
            const countryTemperature = await screen.findByText(`${countryKey}:`);
            expect(countryTemperature).toBeInTheDocument();
        }
    });

    it("renders 'not available' for countries with missing data", async () => {

        for (const countryKey in countries) {
            if (!temperatures[countryKey]) {
                const notAvailable = await screen.findByText("Not available");
                expect(notAvailable).toBeInTheDocument();
            }
        }
    });

    it("filters countries based on max temperature", async () => {

        const filterValues = [0, -1, 1, 20, -20];

        filterValues.forEach((filterValue) => {
            const maxTemperatureInput = screen.getByLabelText("Max Temperature Filter:");
            fireEvent.change(maxTemperatureInput, { target: { value: filterValue.toString() } });

            for (const countryKey in countries) {
                const countryTemperature = countries[countryKey].temperature;
                const countryTemperatureText = `${countryTemperature} ${toSymbol(TemperatureUnit.CELSIUS)}`;
                const countryElement = screen.queryByText(countryTemperatureText);
                if (countryTemperature !== null && countryTemperature <= filterValue) {
                    expect(countryElement).toBeInTheDocument();
                } else {
                    expect(countryElement).not.toBeInTheDocument();
                }
            }
        });
    });
});