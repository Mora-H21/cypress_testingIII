Feature: View Category Products

  Scenario: View products by category and sub-category
    Given I launch the browser_view_category_products
    And I navigate to url_view_category_products
    Then I verify that categories are visible on left side bar_view_category_products
    When I click on 'Women' category_view_category_products
    And I click on 'Dress' subcategory under 'Women'_view_category_products
    Then I verify that category page is displayed with text 'WOMEN - DRESS PRODUCTS'_view_category_products
    When I click on 'Men' category_view_category_products
    When I click on 'Tshirts' subcategory under 'Men'_view_category_products
    Then I verify that category page is displayed with text 'MEN - TSHIRTS PRODUCTS'_view_category_products 