import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";

const homePage = new HomePage();
const productsPage = new ProductsPage();

Given("I launch the browser_view_category_products", () => {
  // Cypress launches browser automatically
});

Given("I navigate to url_view_category_products", () => {
  homePage.visit();
});

Then("I verify that categories are visible on left side bar_view_category_products", () => {
  productsPage.verifyCategoriesSidebarVisible();
});

When("I click on 'Women' category_view_category_products", () => {
  productsPage.clickMainCategory('Women');
});

When("I click on 'Dress' subcategory under 'Women'_view_category_products", () => {
  productsPage.clickSubCategory('Women', 'Dress');
});

Then("I verify that category page is displayed with text 'WOMEN - DRESS PRODUCTS'_view_category_products", () => {
  productsPage.verifyCategoryPageVisible('Women - Dress Products');
});

When("I click on 'Men' category_view_category_products", () => {
    productsPage.clickMainCategory('Men');
  });

When("I click on 'Tshirts' subcategory under 'Men'_view_category_products", () => {
  productsPage.clickSubCategory('Men', 'Tshirts');
});

Then("I verify that category page is displayed with text 'MEN - TSHIRTS PRODUCTS'_view_category_products", () => {
  productsPage.verifyCategoryPageVisible('Men - Tshirts Products');
}); 