Feature: Register User with existing email

  Scenario: Register with an already registered email
    Given I launch the browser_register_existing_email
    And I navigate to url_register_existing_email
    Then I verify that home page is visible successfully_register_existing_email
    When I click on Signup Login button_register_existing_email
    Then I verify 'New User Signup!' is visible_register_existing_email
    When I enter name and already registered email address_register_existing_email
    And I click Signup button_register_existing_email
    Then I verify error 'Email Address already exist!' is visible_register_existing_email