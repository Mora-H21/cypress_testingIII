import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import SignupLoginPage from "../pageObjects/SignupLoginPage";

let user;
const homePage = new HomePage();
const signupLoginPage = new SignupLoginPage();

Given("I launch the browser_register_existing_email", () => {
  cy.fixture("user").then((u) => {
    user = u;
    cy.createTestUser(user); // Ensure user exists before test
  });
});

Given("I navigate to url_register_existing_email", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_register_existing_email", () => {
  homePage.verifyHomePageVisible();
});

When("I click on Signup Login button_register_existing_email", () => {
  homePage.clickSignupLogin();
});

Then("I verify 'New User Signup!' is visible_register_existing_email", () => {
  signupLoginPage.verifyNewUserSignupVisible();
});

When("I enter name and already registered email address_register_existing_email", () => {
  signupLoginPage.enterName(user.name);
  signupLoginPage.enterEmail(user.email);
});

When("I click Signup button_register_existing_email", () => {
  signupLoginPage.clickSignupButton();
});

Then("I verify error 'Email Address already exist!' is visible_register_existing_email", () => {
  cy.contains("Email Address already exist!").should("be.visible");
});