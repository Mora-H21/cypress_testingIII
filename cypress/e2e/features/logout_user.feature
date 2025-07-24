Feature: Logout User

  Scenario: Logout after successful login
    Given I launch the browser_logout_user
    And I navigate to url_logout_user
    Then I verify that home page is visible successfully_logout_user
    When I click on Signup Login button_logout_user
    Then I verify 'Login to your account' is visible_logout_user
    When I enter correct email address and password_logout_user
    And I click login button_logout_user
    Then I verify that 'Logged in as username' is visible_logout_user
    When I click Logout button_logout_user
    Then I verify that user is navigated to login page_logout_user