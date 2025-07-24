Feature: Verify Product quantity in Cart

  Scenario: Add product with specific quantity to cart and verify in cart page
    Given I launch the browser_verify_product_quantity_in_cart
    And I navigate to url_verify_product_quantity_in_cart
    Then I verify that home page is visible successfully_verify_product_quantity_in_cart
    When I click on View Product for first product_verify_product_quantity_in_cart
    Then I verify product detail is opened_verify_product_quantity_in_cart
    When I increase quantity to 4_verify_product_quantity_in_cart
    And I click Add to cart button_verify_product_quantity_in_cart
    And I click View Cart button_verify_product_quantity_in_cart
    Then I verify that product is displayed in cart page with exact quantity_verify_product_quantity_in_cart