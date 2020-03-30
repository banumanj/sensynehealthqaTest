Feature: Test QA App controller using REST API testing framework

  Scenario: Verify one product from the List of products
    Given I have the base URL
    When I send the GET request for "/product/3"
    Then I should receive the correct response code 200
    And response includes the following
      |name|
      |Kids T-shirt|

  Scenario: Create a new Product and expect 200 but received 204
    Given I have the base URL
    When I send the POST request for "/product" with payload "PostRequest"
    Then I receive HTTP response code 204
    And Response error BODY for "POST" is empty

  Scenario: Verify that it returns a list ALL the products and save the last product code
    Given I have the base URL
    When I send the GET request for "/products"
    Then I should receive the correct response code 200
    And response include list of ALL products with the following
      |name|product_price|
      |Lysander|7.66|
