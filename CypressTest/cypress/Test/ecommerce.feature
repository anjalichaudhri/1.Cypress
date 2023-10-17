Feature: End to end Ecommerce validation

    application Regression

    Scenario: Ecommerce products delivery
    Given Open Ecommerce page
    When I add items to the cart
    When Validate total price
    Then select the country submit and verify thank you 

    Scenario: Filling the form to shop
    Given Open Ecommerce page
    When fill the form details
    |name    | gender|
    |test321 | Male  |
    Then validate the forms behavior
    And Select the shop page
