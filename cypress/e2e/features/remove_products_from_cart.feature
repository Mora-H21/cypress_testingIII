Feature: Remove Products From Cart

  Scenario: Remove a product from the cart and verify it is removed
    Given I launch the browser_remove_products_from_cart
    And I navigate to url_remove_products_from_cart
    Then I verify that home page is visible successfully_remove_products_from_cart
    When I click on Products button_remove_products_from_cart
    When I hover over first product and click Add to cart_remove_products_from_cart
    And I click Continue Shopping button_remove_products_from_cart
    When I hover over second product and click Add to cart_remove_products_from_cart
    And I click View Cart button_remove_products_from_cart
    Then I verify cart page is displayed_remove_products_from_cart
    When I remove the first product from the cart_remove_products_from_cart
    Then I verify the first product is removed from the cart_remove_products_from_cart 