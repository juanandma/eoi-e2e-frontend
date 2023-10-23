import { countries } from "../../src/enum/countries";

describe("app", () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    cy.visit("/");
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
  describe("errors", () => {
    it("shows an error message when the API returns an error", () => {
      cy.intercept("GET", "/temperature", {
        statusCode: 400,
        body: {
          error: {
            message: "Error getting temperature",
          },
        },
      });

      cy.contains("Error getting temperature").should("exist");
    });
  })
})
