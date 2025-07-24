import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";
import ProductDetailPage from "../pageObjects/ProductDetailPage";

const homePage = new HomePage();
const productsPage = new ProductsPage();
const productDetailPage = new ProductDetailPage();

Given("I launch the browser_all_products", () => {
  // Cypress launches browser automatically
});

Given("I navigate to url_all_products", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_all_products", () => {
  homePage.verifyHomePageVisible();
});

When("I click on Products button_all_products", () => {
  homePage.clickProducts();
});

Then("I verify user is navigated to ALL PRODUCTS page successfully_all_products", () => {
  productsPage.verifyAllProductsPageVisible();
});

Then("I verify the products list is visible_all_products", () => {
  productsPage.verifyProductsListVisible();
});

When("I click on View Product of first product_all_products", () => {
  productsPage.clickViewFirstProduct();
});

Then("I verify user is landed to product detail page_all_products", () => {
  productDetailPage.verifyProductDetailPageVisible();
});

Then("I verify product details are visible_all_products", () => {
  productDetailPage.verifyProductDetails();
});