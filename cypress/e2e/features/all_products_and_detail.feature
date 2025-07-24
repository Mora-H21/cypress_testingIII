Feature: Verify All Products and product detail page

  Scenario: View all products and product detail
    Given I launch the browser_all_products
    And I navigate to url_all_products
    Then I verify that home page is visible successfully_all_products
    When I click on Products button_all_products
    Then I verify user is navigated to ALL PRODUCTS page successfully_all_products
    Then I verify the products list is visible_all_products
    When I click on View Product of first product_all_products
    Then I verify user is landed to product detail page_all_products
    Then I verify product details are visible_all_products