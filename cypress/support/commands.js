import "@testing-library/cypress/add-commands";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// eslint-disable-next-line no-undef
Cypress.Commands.add("setSelect", (input, value) => {
  cy.findByLabelText(input).select(value);
});

// eslint-disable-next-line no-undef
Cypress.Commands.add("setCountryUnitFromAndTo", (country, unitFrom, unitTo) => {
  cy.setSelect("Country", country);
  cy.setSelect("From", unitFrom);
  cy.setSelect("To", unitTo);
  cy.findByText("Get temperature").click();
})
