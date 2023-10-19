import { countries } from "../../src/enum/countries";

describe("app", () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "https:/localhost:3000/temperature", {
      fixture: "temperature.json",
    }).as("temperature");
  })

  it("fetches the current temperature and converts it", () => {
    cy.setCountryUnitFromAndTo(Object.keys(countries)[0], "Celsius", "Kelvin");

    cy.contains("K").should("exist");
  });
})
