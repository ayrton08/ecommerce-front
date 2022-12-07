describe("authentication passwordless", () => {
  const email = "ayrtonjuarez90@gmail.com";

  context("Home page", () => {
    it("should contain button loggin", () => {
      cy.visit("http://localhost:3000/");
      cy.getByData("btn-login").should("exist").contains(/login/i).click();
    });
  });
  context("Signin page", () => {
    it("should contain email card", () => {
      cy.visit("http://localhost:3000/signin");
      cy.getByData("email-input").should("exist").type(email);
      cy.getByData("btn-email").should("exist").contains(/next/i).click();
      cy.getByData("code-input").should("exist");
    });
  });
});
