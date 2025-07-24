Feature: Login with invalid credentials

  Scenario: Login User with incorrect email and password
    Given I launch the browser_login_unsuccessful
    And I navigate to url_login_unsuccessful
    Then I verify that home page is visible successfully_login_unsuccessful
    When I click on Signup Login button_login_unsuccessful
    Then I verify 'Login to your account' is visible_login_unsuccessful
    When I enter incorrect email address and password_login_unsuccessful
    And I click login button_login_unsuccessful
    Then I verify error 'Your email or password is incorrect!' is visible_login_unsuccessful