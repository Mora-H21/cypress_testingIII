Feature: Search Products and Verify Cart After Login

  Scenario: Search products, add to cart, and verify cart after login
    Given I launch the browser_search_products_and_verify_cart_after_login
    And I navigate to url_search_products_and_verify_cart_after_login
    When I click on Products button_search_products_and_verify_cart_after_login
    Then I verify user is navigated to ALL PRODUCTS page successfully_search_products_and_verify_cart_after_login
    When I enter product name 'Tshirt' in search input and click search button_search_products_and_verify_cart_after_login
    Then I verify 'SEARCHED PRODUCTS' is visible_search_products_and_verify_cart_after_login
    And I verify all the products related to search are visible_search_products_and_verify_cart_after_login
    When I add all searched products to cart_search_products_and_verify_cart_after_login
    And I click Cart button_search_products_and_verify_cart_after_login
    Then I verify searched products are visible in cart_search_products_and_verify_cart_after_login
    When I click on Signup Login button_search_products_and_verify_cart_after_login
    And I enter correct email address and password_search_products_and_verify_cart_after_login
    And I click login button_search_products_and_verify_cart_after_login
    When I go to Cart page_search_products_and_verify_cart_after_login
    Then I verify searched products are visible in cart after login_search_products_and_verify_cart_after_login 