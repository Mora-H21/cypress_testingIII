Feature: Login User

  Scenario: Login User with correct email and password
    Given I launch the browser_login
    And I navigate to url_login
    Then I verify that home page is visible successfully_login
    When I click on Signup Login button
    Then I verify 'Login to your account' is visible
    When I enter correct email address and password
    And I click login button
    Then I verify that 'Logged in as username' is visible_login
    When I click Delete Account button
    Then I verify that 'ACCOUNT DELETED!' is visible_login