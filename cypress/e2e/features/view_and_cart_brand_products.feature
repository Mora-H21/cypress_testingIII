Feature: View & Cart Brand Products

  Scenario: View products by brand and switch brands
    Given I launch the browser_view_and_cart_brand_products
    And I navigate to url_view_and_cart_brand_products
    When I click on Products button_view_and_cart_brand_products
    Then I verify that brands are visible on left side bar_view_and_cart_brand_products
    When I click on 'Polo' brand_view_and_cart_brand_products
    Then I verify that brand page is displayed with products for 'Polo'_view_and_cart_brand_products
    When I click on 'H&M' brand_view_and_cart_brand_products
    Then I verify that brand page is displayed with products for 'H&M'_view_and_cart_brand_products 