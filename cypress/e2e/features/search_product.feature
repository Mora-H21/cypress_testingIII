Feature: Search Product

  Scenario: Search for a product and verify results
    Given I launch the browser_search_product
    And I navigate to url_search_product
    Then I verify that home page is visible successfully_search_product
    When I click on Products button_search_product
    Then I verify user is navigated to ALL PRODUCTS page successfully_search_product
    When I enter product name in search input and click search button_search_product
    Then I verify 'SEARCHED PRODUCTS' is visible_search_product
    Then I verify all the products related to search are visible_search_product