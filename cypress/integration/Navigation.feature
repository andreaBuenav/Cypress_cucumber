Feature: Navigation

Scenario: Navigate to all navigation bar buttons
 Given I visit the homepage
 When I click the cart button
 Then I should get a response code of 200
 
