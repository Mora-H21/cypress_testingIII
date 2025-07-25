import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";
import CartPage from "../pageObjects/CartPage";
import SignupLoginPage from "../pageObjects/SignupLoginPage";


const homePage = new HomePage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const signupLoginPage = new SignupLoginPage();

Given("I launch the browser_search_products_and_verify_cart_after_login", () => {
    cy.fixture("user").then((u) => {
        user = u; // Assign loaded fixture to user variable
        cy.createTestUser(user);
      }); // Ensure user exists
  // Cypress launches browser automatically
});

Given("I navigate to url_search_products_and_verify_cart_after_login", () => {
  homePage.visit();
});

When("I click on Products button_search_products_and_verify_cart_after_login", () => {
  homePage.clickProducts();
});

Then("I verify user is navigated to ALL PRODUCTS page successfully_search_products_and_verify_cart_after_login", () => {
  productsPage.verifyAllProductsPageVisible();
});

When("I enter product name 'Tshirt' in search input and click search button_search_products_and_verify_cart_after_login", () => {
  productsPage.searchProduct('Tshirt');
});

Then("I verify 'SEARCHED PRODUCTS' is visible_search_products_and_verify_cart_after_login", () => {
  productsPage.verifySearchedProductsVisible();
});

Then("I verify all the products related to search are visible_search_products_and_verify_cart_after_login", () => {
  productsPage.verifySearchResults('Tshirt');
});

When("I add all searched products to cart_search_products_and_verify_cart_after_login", () => {
  productsPage.addAllSearchedProductsToCart();
});

When("I click Cart button_search_products_and_verify_cart_after_login", () => {
  homePage.clickCart();
});

Then("I verify searched products are visible in cart_search_products_and_verify_cart_after_login", () => {
  cartPage.verifyProductsInCart(6); // Adjust count if needed
});

When("I click on Signup Login button_search_products_and_verify_cart_after_login", () => {
  homePage.clickSignupLogin();
});

When("I enter correct email address and password_search_products_and_verify_cart_after_login", () => {
  signupLoginPage.enterLoginEmail(user.email);
  signupLoginPage.enterLoginPassword(user.password);
});

When("I click login button_search_products_and_verify_cart_after_login", () => {
  signupLoginPage.clickLoginButton();
});

When("I go to Cart page_search_products_and_verify_cart_after_login", () => {
  homePage.clickCart();
});

Then("I verify searched products are visible in cart after login_search_products_and_verify_cart_after_login", () => {
  cartPage.verifyProductsInCart(6); // Adjust count if needed
}); 