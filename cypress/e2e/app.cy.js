describe("app", () => {
  it("fetches the current temperature and converts it", () => {
    cy.visit("/");

    cy.findByLabelText("From").select("Celsius");
    cy.findByLabelText("To").select("Kelvin");

    cy.findByText(/(\d*\.\d*) K/);
  });
});
