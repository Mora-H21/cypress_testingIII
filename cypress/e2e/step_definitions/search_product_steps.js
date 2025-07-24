import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";

const homePage = new HomePage();
const productsPage = new ProductsPage();

const searchTerm = "Sleeveless"; // You can change this to any product name you want to search

Given("I launch the browser_search_product", () => {
  // Cypress launches browser automatically
});

Given("I navigate to url_search_product", () => {
  homePage.visit();
});

Then("I verify that home page is visible successfully_search_product", () => {
  homePage.verifyHomePageVisible();
});

When("I click on Products button_search_product", () => {
  homePage.clickProducts();
});

Then("I verify user is navigated to ALL PRODUCTS page successfully_search_product", () => {
  productsPage.verifyAllProductsPageVisible();
});

When("I enter product name in search input and click search button_search_product", () => {
  productsPage.searchProduct(searchTerm);
});

Then("I verify 'SEARCHED PRODUCTS' is visible_search_product", () => {
  productsPage.verifySearchedProductsVisible();
});

Then("I verify all the products related to search are visible_search_product", () => {
  productsPage.verifySearchResults(searchTerm);
});