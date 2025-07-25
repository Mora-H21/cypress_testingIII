import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";

const homePage = new HomePage();
const productsPage = new ProductsPage();

Given("I launch the browser_view_and_cart_brand_products", () => {
  // Cypress launches browser automatically
});

Given("I navigate to url_view_and_cart_brand_products", () => {
  homePage.visit();
});

When("I click on Products button_view_and_cart_brand_products", () => {
  homePage.clickProducts();
});

Then("I verify that brands are visible on left side bar_view_and_cart_brand_products", () => {
  productsPage.verifyBrandsSidebarVisible();
});

When(/^I click on '(.+)' brand_view_and_cart_brand_products$/, (brandName) => {
  productsPage.clickBrand(brandName);
});

Then(/^I verify that brand page is displayed with products for '(.+)'_view_and_cart_brand_products$/, (brandName) => {
  productsPage.verifyBrandPageVisible(brandName);
}); 