import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import SignupLoginPage from "../pageObjects/SignupLoginPage";

const homePage = new HomePage();
const signupLoginPage = new SignupLoginPage();

let user; // Declare user variable

Given("I launch the browser_logout_user", () => {
  cy.fixture("user").then((u) => {
    user = u; // Assign loaded fixture to user variable
    cy.createTestUser(user);
  });
});

Given("I navigate to url_logout_user", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_logout_user", () => {
  homePage.verifyHomePageVisible();
});

When("I click on Signup Login button_logout_user", () => {
  homePage.clickSignupLogin();
});

Then("I verify 'Login to your account' is visible_logout_user", () => {
  signupLoginPage.verifyTextVisible("Login to your account");
});

When("I enter correct email address and password_logout_user", () => {
  signupLoginPage.enterLoginEmail(user.email);
  signupLoginPage.enterLoginPassword(user.password);
});

When("I click login button_logout_user", () => {
  signupLoginPage.clickLoginButton();
});

Then("I verify that 'Logged in as username' is visible_logout_user", () => {
  homePage.verifyLoggedInAs(user.name);
});

When("I click Logout button_logout_user", () => {
  cy.contains("Logout").click();
});

Then("I verify that user is navigated to login page_logout_user", () => {
  signupLoginPage.verifyTextVisible("Login to your account");
});