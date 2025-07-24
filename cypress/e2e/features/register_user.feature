Feature: Register User

  Scenario: Register a new user and delete the account
    Given I launch the browser_register
    And I navigate to url_register
    Then I verify that home page is visible successfully_register
    When I click on 'Signup Login' button
    Then I verify 'New User Signup!' is visible
    When I enter name and email address
    And I click 'Signup' button
    Then I verify that 'ENTER ACCOUNT INFORMATION' is visible
    When I fill account details
    And I select newsletter and offers checkboxes
    And I fill address details
    And I click 'Create Account button'
    Then I verify that 'ACCOUNT CREATED!' is visible
    When I click 'Continue' button
    Then I verify that 'Logged in as username' is visible_register
    When I click 'Delete Account' button
    Then I verify that 'ACCOUNT DELETED!' is visible_register
    And I click 'Continue' button again