import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";
import CartPage from "../pageObjects/CartPage";

const homePage = new HomePage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();

Given("I launch the browser_remove_products_from_cart", () => {
  // Cypress launches browser automatically
});

Given("I navigate to url_remove_products_from_cart", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_remove_products_from_cart", () => {
  homePage.verifyHomePageVisible();
});

When("I click on Products button_remove_products_from_cart", () => {
  homePage.clickProducts();
});

When("I hover over first product and click Add to cart_remove_products_from_cart", () => {
  productsPage.hoverAndAddToCart(0);
});

When("I click Continue Shopping button_remove_products_from_cart", () => {
  productsPage.clickContinueShopping();
});

When("I hover over second product and click Add to cart_remove_products_from_cart", () => {
  productsPage.hoverAndAddToCart(1);
});

When("I click View Cart button_remove_products_from_cart", () => {
  productsPage.clickViewCart();
});

Then("I verify cart page is displayed_remove_products_from_cart", () => {
  cartPage.verifyCartPageVisible();
});

When("I remove the first product from the cart_remove_products_from_cart", () => {
  cartPage.removeFirstProduct();
});

Then("I verify the first product is removed from the cart_remove_products_from_cart", () => {
  cartPage.verifyProductNotInCart('Blue Top'); // Adjust product name if needed
}); 