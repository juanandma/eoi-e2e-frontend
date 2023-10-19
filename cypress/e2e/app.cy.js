import { countries } from "../../src/enum/countries";

describe("app", () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "https:/localhost:3000/temperature", {
      fixture: "temperature.json",
    }).as("temperature");
  })

  it("fetches the current temperature in the selected unit", () => {
    cy.setCountryUnitFromAndTo(Object.keys(countries)[0], "Celsius", "Kelvin");

    cy.contains("K").should("exist");
  });

  it("fetches the current temperature and converts it to another unit", () => {
    cy.setCountryUnitFromAndTo(Object.keys(countries)[0], "Celsius", "Kelvin");

    cy.contains("K").should("exist");

    cy.setSelect("To", 'Celsius');

    cy.contains("°C").should("exist");
    
    cy.setSelect("To", 'Fahrenheit');

    cy.contains("°F").should("exist");
  })
})
