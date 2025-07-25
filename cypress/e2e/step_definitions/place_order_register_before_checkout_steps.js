import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";
import CartPage from "../pageObjects/CartPage";
import SignupLoginPage from "../pageObjects/SignupLoginPage";
import SignupPage from "../pageObjects/SignupPage";
import AccountCreatedPage from "../pageObjects/AccountCreatedPage";
import CheckoutPage from "../pageObjects/CheckoutPage";
import PaymentPage from "../pageObjects/PaymentPage";

const homePage = new HomePage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const signupLoginPage = new SignupLoginPage();
const signupPage = new SignupPage();
const accountCreatedPage = new AccountCreatedPage();
const checkoutPage = new CheckoutPage();
const paymentPage = new PaymentPage();

let user;

Given("I launch the browser_place_order_register_before_checkout", () => {
  cy.fixture("user").then((u) => {
    user = u;
  });
});

Given("I navigate to url_place_order_register_before_checkout", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_place_order_register_before_checkout", () => {
  homePage.verifyHomePageVisible();
});

When("I click Signup Login button_place_order_register_before_checkout", () => {
  homePage.clickSignupLogin();
});

When("I fill all details in Signup and create account_place_order_register_before_checkout", () => {
  signupLoginPage.enterName(user.name);
  signupLoginPage.enterEmail(user.email);
  signupLoginPage.clickSignupButton();
  signupPage.selectTitle("Mr");
  signupPage.enterPassword(user.password);
  signupPage.selectDateOfBirth("1", "January", "2000");
  signupPage.selectNewsletter();
  signupPage.selectOffers();
  signupPage.fillAddress(user);
  signupPage.clickCreateAccount();
});

Then("I verify 'ACCOUNT CREATED!' and click Continue button_place_order_register_before_checkout", () => {
  accountCreatedPage.verifyAccountCreated();
  accountCreatedPage.clickContinue();
});

Then("I verify 'Logged in as username' at top_place_order_register_before_checkout", () => {
  homePage.verifyLoggedInAs(user.name);
});

When("I add products to cart_place_order_register_before_checkout", () => {
  homePage.clickProducts();
  productsPage.hoverAndAddToCart(0);
  productsPage.clickContinueShopping();
  productsPage.hoverAndAddToCart(1);
});

When("I click Cart button_place_order_register_before_checkout", () => {
  homePage.clickCart();
});

Then("I verify that cart page is displayed_place_order_register_before_checkout", () => {
  cartPage.verifyCartPageVisible();
});

When("I click Proceed To Checkout_place_order_register_before_checkout", () => {
  cartPage.clickProceedToCheckout();
});

Then("I verify Address Details and Review Your Order_place_order_register_before_checkout", () => {
  checkoutPage.verifyAddressDetails(user);
  checkoutPage.verifyOrderReview();
});

When("I enter description in comment text area and click Place Order_place_order_register_before_checkout", () => {
  checkoutPage.enterComment("Please deliver between 9am-5pm.");
  checkoutPage.clickPlaceOrder();
});

When("I enter payment details_place_order_register_before_checkout", () => {
  paymentPage.enterPaymentDetails({
    name: "Test User",
    cardNumber: "4111111111111111",
    cvc: "123",
    expiryMonth: "12",
    expiryYear: "2028"
  });
});

When("I click Pay and Confirm Order button_place_order_register_before_checkout", () => {
  paymentPage.clickPayAndConfirmOrder();
});

Then("I verify success message 'Your order has been placed successfully!'_place_order_register_before_checkout", () => {
  paymentPage.verifyOrderSuccess();
});

When("I click Delete Account button_place_order_register_before_checkout", () => {
  homePage.clickDeleteAccount();
});

Then("I verify 'ACCOUNT DELETED!' and click Continue button_place_order_register_before_checkout", () => {
  homePage.verifyAccountDeletedVisible();
  homePage.clickContinue();
});