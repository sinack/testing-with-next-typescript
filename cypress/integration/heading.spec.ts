describe("TopPage", () => {
  it("Display Header Message", () => {
    cy.visit("/");

    cy.get("[data-cy=heading-title]").should("have.text", "Hello Next.js 👋");
  });
});
