import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import TestCasesPage from "../pageObjects/TestCasesPage";

const homePage = new HomePage();
const testCasesPage = new TestCasesPage();

Given("I launch the browser_test_cases_page", () => {
  // Cypress launches browser automatically
});

Given("I navigate to url_test_cases_page", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_test_cases_page", () => {
  homePage.verifyHomePageVisible();
});

When("I click on Test Cases button_test_cases_page", () => {
  homePage.clickTestCases();
});

Then("I verify user is navigated to test cases page successfully_test_cases_page", () => {
  testCasesPage.verifyTestCasesPageVisible();
});