Feature: Amazon Shopping

  Scenario: User adds a product to cart
    Given I open Amazon
    When I search for "iPhone 16"
    And I select the first product
    And I add the product to cart
    And I go to the cart
    Then I should see the cart page