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
import 'cypress-file-upload';

Cypress.Commands.add("createTestUser", (user) => {
  cy.visit("/");
  cy.contains("Signup / Login").click();
  cy.get('[data-qa="signup-name"]').type(user.name);
  cy.get('[data-qa="signup-email"]').type(user.email);
  cy.get('[data-qa="signup-button"]').click();

  cy.document().then((doc) => {
    // Check if "Email Address already exist!" alert is present
    if (doc.body.innerText.includes("Email Address already exist!")) {
      cy.loginAndDeleteUser(user);
      // Try registration again after deletion
      cy.visit("/");
      cy.contains("Signup / Login").click();
      cy.get('[data-qa="signup-name"]').type(user.name);
      cy.get('[data-qa="signup-email"]').type(user.email);
      cy.get('[data-qa="signup-button"]').click();
    }
  });

  cy.contains("Enter Account Information").should("be.visible");
  cy.get("#id_gender1").check();
  cy.get('[data-qa="password"]').type(user.password);
  cy.get('[data-qa="days"]').select("1");
  cy.get('[data-qa="months"]').select("January");
  cy.get('[data-qa="years"]').select("2000");
  cy.get("#newsletter").check();
  cy.get("#optin").check();
  cy.get('[data-qa="first_name"]').type(user.firstName);
  cy.get('[data-qa="last_name"]').type(user.lastName);
  cy.get('[data-qa="company"]').type(user.company);
  cy.get('[data-qa="address"]').type(user.address);
  cy.get('[data-qa="address2"]').type(user.address2);
  cy.get('[data-qa="country"]').select(user.country);
  cy.get('[data-qa="state"]').type(user.state);
  cy.get('[data-qa="city"]').type(user.city);
  cy.get('[data-qa="zipcode"]').type(user.zipcode);
  cy.get('[data-qa="mobile_number"]').type(user.mobile);
  cy.get('[data-qa="create-account"]').click();
  cy.contains("Account Created!").should("be.visible");
  cy.contains("Continue").click();
  cy.contains("Logout").click();
});

Cypress.Commands.add("loginAndDeleteUser", (user) => {
  cy.visit("https://www.automationexercise.com");
  cy.contains("Signup / Login").click();
  cy.get('input[data-qa="login-email"]').type(user.email);
  cy.get('input[data-qa="login-password"]').type(user.password);
  cy.get('[data-qa="login-button"]').click();
  cy.contains(`Logged in as ${user.name}`).should("be.visible");
  cy.contains("Delete Account").click();
  cy.get('[data-qa="account-deleted"]').should("be.visible").and("contain.text", "Account Deleted!");
  cy.get('[data-qa="continue-button"]').click();
});