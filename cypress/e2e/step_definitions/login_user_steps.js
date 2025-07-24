import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import SignupLoginPage from "../pageObjects/SignupLoginPage";

const user = {
  name: "TestUser",
  email: `testuser@example211002377.com`,
  password: "Password123!",
  firstName: "Test",
  lastName: "User",
  company: "TestCompany",
  address: "123 Test St",
  address2: "Suite 100",
  country: "Canada",
  state: "Ontario",
  city: "Toronto",
  zipcode: "A1A1A1",
  mobile: "1234567890",
};

const homePage = new HomePage();
const signupLoginPage = new SignupLoginPage();

Given("I launch the browser_login", () => {
  cy.createTestUser(user); 
  // Cypress launches browser automatically
});

Given("I navigate to url_login", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_login", () => {
  homePage.verifyHomePageVisible();
});

When("I click on Signup Login button", () => {
  homePage.clickSignupLogin();
});

Then("I verify 'Login to your account' is visible", () => {
  signupLoginPage.verifyTextVisible("Login to your account");
});

When("I enter correct email address and password", () => {
  signupLoginPage.enterLoginEmail(user.email);
  signupLoginPage.enterLoginPassword(user.password);
});

When("I click login button", () => {
  signupLoginPage.clickLoginButton();
});

Then("I verify that 'Logged in as username' is visible_login", () => {
  homePage.verifyLoggedInAs(user.name);
});

When("I click Delete Account button", () => {
  homePage.clickDeleteAccount();
});

Then("I verify that 'ACCOUNT DELETED!' is visible_login", () => {
  homePage.verifyAccountDeletedVisible();
});
