class SignupLoginPage {
  enterName(name) {
    cy.get('[data-qa="signup-name"]').type(name);
  }
  enterEmail(email) {
    cy.get('[data-qa="signup-email"]').type(email);
  }
  clickSignupButton() {
    cy.get('[data-qa="signup-button"]').click();
  }
  enterLoginEmail(email) {
    cy.get('input[data-qa="login-email"]').type(email);
  }

  enterLoginPassword(password) {
    cy.get('input[data-qa="login-password"]').type(password);
  }

  clickLoginButton() {
    cy.get('button[data-qa="login-button"]').click();
  }

  verifyTextVisible(text) {
    cy.contains(text).should("be.visible");
  }

  clickDeleteAccount() {
    cy.contains("Delete Account").click();
  }

  verifyNewUserSignupVisible() {
    cy.contains("New User Signup!").should("be.visible");
  }
}

export default SignupLoginPage;
