class HomePage {
  visit() {
    cy.visit("/");
  }

  verifyHomePageVisible() {
    cy.get("body").should("be.visible");
  }

  clickSignupLogin() {
    cy.contains("Signup / Login").click();
  }

  verifyLoggedInAs(username) {
    cy.contains(`Logged in as ${username}`).should("be.visible");
  }

  clickDeleteAccount() {
    cy.contains("Delete Account").click();
  }

  verifyAccountDeletedVisible() {
    cy.contains("Account Deleted!").should("be.visible");
  }

  clickContinue() {
    cy.contains("Continue").click();
  }
}

export default HomePage;
