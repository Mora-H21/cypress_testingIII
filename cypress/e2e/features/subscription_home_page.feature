Feature: Verify Subscription in home page

  Scenario: Subscribe to newsletter from home page
    Given I launch the browser_subscription_home_page
    And I navigate to url_subscription_home_page
    Then I verify that home page is visible successfully_subscription_home_page
    When I scroll down to footer_subscription_home_page
    Then I verify text 'SUBSCRIPTION'_subscription_home_page
    When I enter email address in input and click arrow button_subscription_home_page
    Then I verify success message 'You have been successfully subscribed!' is visible_subscription_home_page