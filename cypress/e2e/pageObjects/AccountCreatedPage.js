// filepath: cypress/e2e/pageObjects/AccountCreatedPage.js
class AccountCreatedPage {
  verifyAccountCreated() {
    cy.contains("Account Created!").should("be.visible");
  }
  clickContinue() {
    cy.get('[data-qa="continue-button"]').click();
  }
}
export default AccountCreatedPage;
