Feature: Add Products in Cart

  Scenario: Add multiple products to cart and verify details
    Given I launch the browser_add_products_in_cart
    And I navigate to url_add_products_in_cart
    Then I verify that home page is visible successfully_add_products_in_cart
    When I click on Products button_add_products_in_cart
    When I hover over first product and click Add to cart_add_products_in_cart
    And I click Continue Shopping button_add_products_in_cart
    When I hover over second product and click Add to cart_add_products_in_cart
    And I click View Cart button_add_products_in_cart
    Then I verify both products are added to Cart_add_products_in_cart
    And I verify their prices, quantity and total price_add_products_in_cart