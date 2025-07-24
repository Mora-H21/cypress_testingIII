import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";
import CartPage from "../pageObjects/CartPage";

const homePage = new HomePage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();

Given("I launch the browser_add_products_in_cart", () => {
  // Cypress launches browser automatically
});

Given("I navigate to url_add_products_in_cart", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_add_products_in_cart", () => {
  homePage.verifyHomePageVisible();
});

When("I click on Products button_add_products_in_cart", () => {
  homePage.clickProducts();
});

When("I hover over first product and click Add to cart_add_products_in_cart", () => {
  productsPage.hoverAndAddToCart(0);
});

When("I click Continue Shopping button_add_products_in_cart", () => {
  productsPage.clickContinueShopping();
});

When("I hover over second product and click Add to cart_add_products_in_cart", () => {
  productsPage.hoverAndAddToCart(1);
});

When("I click View Cart button_add_products_in_cart", () => {
  productsPage.clickViewCart();
});

Then("I verify both products are added to Cart_add_products_in_cart", () => {
  cartPage.verifyProductsInCart(2);
});

Then("I verify their prices, quantity and total price_add_products_in_cart", () => {
  cartPage.verifyPricesQuantitiesAndTotal();
});