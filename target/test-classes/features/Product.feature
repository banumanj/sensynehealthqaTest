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

  Scenario: Update a Product and expect 200 but received 204
    Given I have the base URL
    When I send the PUT request for most recently created "/product" with payload "PutRequest"
    Then I receive HTTP response code 204
    And Response error BODY for "PUT" is empty

  Scenario: Delete a product and expect 200 but received 204
    Given I have the base URL
    When I send the DELETE request for most recently created "/product"
    Then I receive HTTP response code 204
    And Response error BODY for "DELETE" is empty
    Then I send the GET request for "/products"
    And  I should receive the correct response with one deleted productID

  Scenario: Make a new Product with incorrect payload
    Given I have the base URL
    When I send the POST request for "/product" with payload "PostRequestError"
    Then I should receive the correct error response code 400
    And I should receive the correct error response payload with error desc "'price' is a required property"


  Scenario: Delete a product with invalid product code
    Given I have the base URL
    When I send the DELETE request for "/product/0"
    Then I should receive the correct error response code 404
    And I should receive the correct error response payload with error desc "The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again."

#####  all the below tests are failing as there are errors in the code

  Scenario: Create a new Product and expect 200
    Given I have the base URL
    When I send the POST request for "/product" with payload "PostRequest"
    Then I receive HTTP response code 200
    And Response error BODY for "POST" is not empty


  Scenario: Update a Product and expect 200
    Given I have the base URL
    When I send the PUT request for "/product/2" with payload "PutRequest"
    Then I receive HTTP response code 200
    And Response error BODY for "PUT" is not empty


  Scenario: Verify all fields for a product from the List of products
    Given I have the base URL
    When I send the GET request for "/product/3"
    Then I should receive the correct response code 200
    And response includes all the following
      |product_code|3|
      |name|Kids T-shirt|
      |product_price|19.95|


  Scenario: Delete a product and expect 200
    Given I have the base URL
    When I send the GET request for "/products"
    Then I should receive the correct response code 200 and store the latest product code
    When I send the DELETE request for most recently created "/product"
    Then I should receive the correct response code 200
    And Response error BODY for "DELETE" is not empty
    Then I send the GET request for "/products"
    And  I should receive the correct response with one deleted productID
