import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import ContactUsPage from "../pageObjects/ContactUsPage";

const homePage = new HomePage();
const contactUsPage = new ContactUsPage();

Given("I launch the browser_contact_us_form", () => {
  // Cypress launches browser automatically
});

Given("I navigate to url_contact_us_form", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_contact_us_form", () => {
  homePage.verifyHomePageVisible();
});

When("I click on Contact Us button_contact_us_form", () => {
  homePage.clickContactUs();
});

Then("I verify 'GET IN TOUCH' is visible_contact_us_form", () => {
  contactUsPage.verifyGetInTouchVisible();
});

When("I enter name, email, subject and message_contact_us_form", () => {
  contactUsPage.enterContactDetails({
    name: "TestUser",
    email: "testuser@example.com",
    subject: "Test Subject",
    message: "Test message for contact form."
  });
});

When("I upload file_contact_us_form", () => {
  contactUsPage.uploadFile("/example.json"); // Use any file in your fixtures
});

When("I click Submit button_contact_us_form", () => {
  contactUsPage.clickSubmit();
});

When("I click OK button_contact_us_form", () => {
  contactUsPage.clickOk();
});

Then("I verify success message 'Success! Your details have been submitted successfully.' is visible_contact_us_form", () => {
  contactUsPage.verifySuccessMessage();
});

When("I click Home button_contact_us_form", () => {
  contactUsPage.clickHome();
});

Then("I verify that landed to home page successfully_contact_us_form", () => {
  homePage.verifyHomePageVisible();
});