import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";
import ProductDetailPage from "../pageObjects/ProductDetailPage";
import CartPage from "../pageObjects/CartPage";

const homePage = new HomePage();
const productsPage = new ProductsPage();
const productDetailPage = new ProductDetailPage();
const cartPage = new CartPage();

Given("I launch the browser_verify_product_quantity_in_cart", () => {
  // Cypress launches browser automatically
});

Given("I navigate to url_verify_product_quantity_in_cart", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_verify_product_quantity_in_cart", () => {
  homePage.verifyHomePageVisible();
});

When("I click on View Product for first product_verify_product_quantity_in_cart", () => {
  productsPage.clickViewFirstProduct();
});

Then("I verify product detail is opened_verify_product_quantity_in_cart", () => {
  productDetailPage.verifyProductDetailPageVisible();
});

When("I increase quantity to 4_verify_product_quantity_in_cart", () => {
  productDetailPage.setQuantity(4);
});

When("I click Add to cart button_verify_product_quantity_in_cart", () => {
  productDetailPage.clickAddToCart();
});

When("I click View Cart button_verify_product_quantity_in_cart", () => {
  productDetailPage.clickViewCart();
});

Then("I verify that product is displayed in cart page with exact quantity_verify_product_quantity_in_cart", () => {
  cartPage.verifyProductQuantity(4);
});