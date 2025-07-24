import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";

const homePage = new HomePage();
const subscriptionEmail = `test${Date.now()}@example.com`;

Given("I launch the browser_subscription_home_page", () => {
  // Cypress launches browser automatically
});

Given("I navigate to url_subscription_home_page", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_subscription_home_page", () => {
  homePage.verifyHomePageVisible();
});

When("I scroll down to footer_subscription_home_page", () => {
  cy.scrollTo("bottom");
});

Then("I verify text 'SUBSCRIPTION'_subscription_home_page", () => {
  cy.contains("Subscription").should("be.visible");
});

When("I enter email address in input and click arrow button_subscription_home_page", () => {
  cy.get("#susbscribe_email").type(subscriptionEmail);
  cy.get("#subscribe").click();
});

Then("I verify success message 'You have been successfully subscribed!' is visible_subscription_home_page", () => {
  cy.contains("You have been successfully subscribed!").should("be.visible");
});