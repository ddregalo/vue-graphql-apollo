// https://docs.cypress.io/api/introduction/api.html

describe("Home Page View", () => {
  it("Visits the home page and has title", () => {
    cy.visit("/");
    cy.contains("h1", "StarWars Characters");
  });

  it("Visits the home page and has Home and About Link", () => {
    cy.visit("/");
    cy.get('[href="/"]');
    cy.get('[href="/about"]');
  });

  it("Visits the home page and clicks to visit About page", () => {
    cy.visit("/");
    cy.get('[href="/about"]').click();
    cy.get("h5").contains("ABOUT");
  });
});
