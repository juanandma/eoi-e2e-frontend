import { countries } from "../../src/enum/countries";

describe("app", () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    cy.visit("/");
  })

  it("gets the current temperature in the selected unit", () => {
    cy.setCountryUnitFromAndTo(Object.keys(countries)[0], "Celsius", "Kelvin");

    cy.contains("K").should("exist");
  });

  it("gets the current temperature and converts it to another unit", () => {
    cy.setCountryUnitFromAndTo(Object.keys(countries)[0], "Celsius", "Kelvin");

    cy.contains("K").should("exist");

    cy.setSelect("To", 'Celsius');

    cy.contains("°C").should("exist");

    cy.setSelect("To", 'Fahrenheit');

    cy.contains("°F").should("exist");
  })
  it("votes if the temperature of the getted country is correct", () => {
    cy.setCountryUnitFromAndTo("Spain", "Celsius", "Kelvin");

    cy.get("button").contains("Good").click();

    cy.contains("Thanks for voting!").should("exist");

    cy.visit("/votes");

    cy.contains("Spain").should("exist");
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

  describe("Add Country", () => {
    it("shows shows a new country when saved", () => {
      cy.visit('/list')
      cy.contains('Australia').should("exist");
      cy.visit('/form')
      cy.get("#ip").type("1.17.4.0")
      cy.get("button").contains("Save").click();
      cy.visit('/list')
      cy.contains('Australia').should("not.exist");
    });
  })
})
