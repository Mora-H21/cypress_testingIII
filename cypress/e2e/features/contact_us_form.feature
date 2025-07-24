Feature: Contact Us Form

  Scenario: Submit Contact Us form successfully
    Given I launch the browser_contact_us_form
    And I navigate to url_contact_us_form
    Then I verify that home page is visible successfully_contact_us_form
    When I click on Contact Us button_contact_us_form
    Then I verify 'GET IN TOUCH' is visible_contact_us_form
    When I enter name, email, subject and message_contact_us_form
    And I upload file_contact_us_form
    And I click Submit button_contact_us_form
    And I click OK button_contact_us_form
    Then I verify success message 'Success! Your details have been submitted successfully.' is visible_contact_us_form
    When I click Home button_contact_us_form
    Then I verify that landed to home page successfully_contact_us_form