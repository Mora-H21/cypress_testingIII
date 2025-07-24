Feature: Verify Test Cases Page

  Scenario: Navigate to Test Cases page
    Given I launch the browser_test_cases_page
    And I navigate to url_test_cases_page
    Then I verify that home page is visible successfully_test_cases_page
    When I click on Test Cases button_test_cases_page
    Then I verify user is navigated to test cases page successfully_test_cases_page