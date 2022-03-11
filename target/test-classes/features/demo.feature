Feature: Login Feature

  Background: common test steps
    Given User is on the application

@amit
  Scenario Outline: Verify Dashboard
    When user clicks on login link
    And enter "<Username>" and "<password>"
    And user navigate to the dashboard
    And Company logo display dkcnjerkfjefknefk
    When user navigates to instagram
    And enter the "<Username>" and "<password>"
    Then Instagram dashboard will be display
    When User sign up with the values "<Username>" and "<password>"

    Examples: 
      | Username | password |
      | user1    | amit1234 |
      
      
      @regression @smoke
  Scenario Outline: Verify settings
    When user clicks on login link
    And enter "<Username>" and "<password>"
    And user navigate to the dashboard
    And Company logo display dkcnjerkfjefknefk
    When user navigates to instagram
    And enter the "<Username>" and "<password>"
    Then Instagram dashboard will be display

    Examples: 
      | Username | password |
      | user1    | amit1234 |
      
      
      @smoke
  Scenario Outline: Verify logout
    When user clicks on login link
    And enter "<Username>" and "<password>"
    And user navigate to the dashboard
    And Company logo display dkcnjerkfjefknefk
    When user navigates to instagram
    And enter the "<Username>" and "<password>"
    Then Instagram dashboard will be display

    Examples: 
      | Username | password |
      | user1    | amit1234 |
      

  