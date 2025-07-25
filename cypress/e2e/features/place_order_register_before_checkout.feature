Feature: Place Order - Register before Checkout

  Scenario: Register before checkout and place order
    Given I launch the browser_place_order_register_before_checkout
    And I navigate to url_place_order_register_before_checkout
    Then I verify that home page is visible successfully_place_order_register_before_checkout
    When I click Signup Login button_place_order_register_before_checkout
    When I fill all details in Signup and create account_place_order_register_before_checkout
    Then I verify 'ACCOUNT CREATED!' and click Continue button_place_order_register_before_checkout
    Then I verify 'Logged in as username' at top_place_order_register_before_checkout
    When I add products to cart_place_order_register_before_checkout
    And I click Cart button_place_order_register_before_checkout
    Then I verify that cart page is displayed_place_order_register_before_checkout
    When I click Proceed To Checkout_place_order_register_before_checkout
    Then I verify Address Details and Review Your Order_place_order_register_before_checkout
    When I enter description in comment text area and click Place Order_place_order_register_before_checkout
    And I enter payment details_place_order_register_before_checkout
    And I click Pay and Confirm Order button_place_order_register_before_checkout
    Then I verify success message 'Your order has been placed successfully!'_place_order_register_before_checkout
    When I click Delete Account button_place_order_register_before_checkout
    Then I verify 'ACCOUNT DELETED!' and click Continue button_place_order_register_before_checkout