import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import SignupLoginPage from "../pageObjects/SignupLoginPage";

const invalidUser = {
  email: "wronguser@example.com",
  password: "WrongPassword!",
};

const homePage = new HomePage();
const signupLoginPage = new SignupLoginPage();

Given("I launch the browser_login_unsuccessful", () => {
  // Cypress launches browser automatically
});

Given("I navigate to url_login_unsuccessful", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_login_unsuccessful", () => {
  homePage.verifyHomePageVisible();
});

When("I click on Signup Login button_login_unsuccessful", () => {
  homePage.clickSignupLogin();
});

Then("I verify 'Login to your account' is visible_login_unsuccessful", () => {
  signupLoginPage.verifyTextVisible("Login to your account");
});

When("I enter incorrect email address and password_login_unsuccessful", () => {
  signupLoginPage.enterLoginEmail(invalidUser.email);
  signupLoginPage.enterLoginPassword(invalidUser.password);
});

When("I click login button_login_unsuccessful", () => {
  signupLoginPage.clickLoginButton();
});

Then("I verify error 'Your email or password is incorrect!' is visible_login_unsuccessful", () => {
  cy.contains("Your email or password is incorrect!").should("be.visible");
});