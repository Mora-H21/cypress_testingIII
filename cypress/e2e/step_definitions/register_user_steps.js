import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import SignupLoginPage from "../pageObjects/SignupLoginPage";
import SignupPage from "../pageObjects/SignupPage";
import AccountCreatedPage from "../pageObjects/AccountCreatedPage";

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
const signupPage = new SignupPage();
const accountCreatedPage = new AccountCreatedPage();

Given("I launch the browser_register", () => {
  // Cypress launches browser automatically
});

Given("I navigate to url_register", () => {
    homePage.visit();
});

Then("I verify that home page is visible successfully_register", () => {
  homePage.verifyHomePageVisible();
});

When("I click on 'Signup Login' button", () => {
  homePage.clickSignupLogin();
});

Then("I verify 'New User Signup!' is visible", () => {
  signupLoginPage.verifyNewUserSignupVisible();
});

When("I enter name and email address", () => {
  signupLoginPage.enterName(user.name);
  signupLoginPage.enterEmail(user.email);
});

When("I click 'Signup' button", () => {
  signupLoginPage.clickSignupButton();
});

Then("I verify that 'ENTER ACCOUNT INFORMATION' is visible", () => {
  signupPage.verifyEnterAccountInfoVisible();
});

When("I fill account details", () => {
  signupPage.selectTitle("Mr");
  signupPage.enterPassword(user.password);
  signupPage.selectDateOfBirth("1", "January", "2000");
});

When("I select newsletter and offers checkboxes", () => {
  signupPage.selectNewsletter();
  signupPage.selectOffers();
});

When("I fill address details", () => {
  signupPage.fillAddress(user);
});

When("I click 'Create Account button'", () => {
  signupPage.clickCreateAccount();
});

Then("I verify that 'ACCOUNT CREATED!' is visible", () => {
  accountCreatedPage.verifyAccountCreated();
});

When("I click 'Continue' button", () => {
  accountCreatedPage.clickContinue();
});

Then("I verify that 'Logged in as username' is visible_register", () => {
  homePage.verifyLoggedInAs(user.name);
});

When("I click 'Delete Account' button", () => {
  homePage.clickDeleteAccount();
});

Then("I verify that 'ACCOUNT DELETED!' is visible_register", () => {
  homePage.verifyAccountDeletedVisible();
});

When("I click 'Continue' button again", () => {
  homePage.clickContinue();
});
