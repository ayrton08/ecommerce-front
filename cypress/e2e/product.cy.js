describe("authentication passwordless", () => {
  context("Home page", () => {
    it("should search a product", () => {
      cy.visit("http://localhost:3000/");
      cy.getByData("search-input").should("exist").type("Chairs");
      cy.getByData("btn-search").should("exist").click();
    });
  });
  // context("Signin page", () => {
  //   it("should contain email card", () => {
  //     cy.visit("http://localhost:3000/signin");
  //     cy.getByData("email-input").should("exist").type(email);
  //     cy.getByData("btn-email").should("exist").contains(/next/i).click();
  //     cy.getByData("code-input").should("exist");
  //   });
  // });
});
