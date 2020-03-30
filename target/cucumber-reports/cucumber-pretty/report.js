$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Product.feature");
formatter.feature({
  "line": 1,
  "name": "Test QA App controller using REST API testing framework",
  "description": "",
  "id": "test-qa-app-controller-using-rest-api-testing-framework",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify one product from the List of products",
  "description": "",
  "id": "test-qa-app-controller-using-rest-api-testing-framework;verify-one-product-from-the-list-of-products",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I send the GET request for \"/product/3\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should receive the correct response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "name"
      ],
      "line": 8
    },
    {
      "cells": [
        "Kids T-shirt"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.i_have_the_base_URL()"
});
formatter.result({
  "duration": 2163134300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/product/3",
      "offset": 28
    }
  ],
  "location": "ProductSteps.i_send_the_GET_request_for(String)"
});
formatter.result({
  "duration": 3645721200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 43
    }
  ],
  "location": "ProductSteps.i_should_receive_the_correct_response_code(int)"
});
formatter.result({
  "duration": 120282200,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.response_includes_the_following(DataTable)"
});
formatter.result({
  "duration": 1311152000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Create a new Product and expect 200 but received 204",
  "description": "",
  "id": "test-qa-app-controller-using-rest-api-testing-framework;create-a-new-product-and-expect-200-but-received-204",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I send the POST request for \"/product\" with payload \"PostRequest\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I receive HTTP response code 204",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Response error BODY for \"POST\" is empty",
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.i_have_the_base_URL()"
});
formatter.result({
  "duration": 303200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/product",
      "offset": 29
    },
    {
      "val": "PostRequest",
      "offset": 53
    }
  ],
  "location": "ProductSteps.i_send_the_POST_request_for_with_payload(String,String)"
});
formatter.result({
  "duration": 228646300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 29
    }
  ],
  "location": "ProductSteps.i_receive_HTTP_response_code(int)"
});
formatter.result({
  "duration": 4591500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 25
    }
  ],
  "location": "ProductSteps.response_error_BODY_for_is_empty(String)"
});
formatter.result({
  "duration": 171900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that it returns a list ALL the products and save the last product code",
  "description": "",
  "id": "test-qa-app-controller-using-rest-api-testing-framework;verify-that-it-returns-a-list-all-the-products-and-save-the-last-product-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I send the GET request for \"/products\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should receive the correct response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "response include list of ALL products with the following",
  "rows": [
    {
      "cells": [
        "name",
        "product_price"
      ],
      "line": 22
    },
    {
      "cells": [
        "Lysander",
        "7.66"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.i_have_the_base_URL()"
});
formatter.result({
  "duration": 74700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/products",
      "offset": 28
    }
  ],
  "location": "ProductSteps.i_send_the_GET_request_for(String)"
});
formatter.result({
  "duration": 67938900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 43
    }
  ],
  "location": "ProductSteps.i_should_receive_the_correct_response_code(int)"
});
formatter.result({
  "duration": 1069000,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.response_include_list_of_ALL_products_with_the_following(DataTable)"
});
formatter.result({
  "duration": 14932800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Update a Product and expect 200 but received 204",
  "description": "",
  "id": "test-qa-app-controller-using-rest-api-testing-framework;update-a-product-and-expect-200-but-received-204",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I send the PUT request for most recently created \"/product\" with payload \"PutRequest\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I receive HTTP response code 204",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Response error BODY for \"PUT\" is empty",
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.i_have_the_base_URL()"
});
formatter.result({
  "duration": 74400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/product",
      "offset": 50
    },
    {
      "val": "PutRequest",
      "offset": 74
    }
  ],
  "location": "ProductSteps.i_send_the_PUT_request_for_most_recently_created_with_payload(String,String)"
});
formatter.result({
  "duration": 81866800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 29
    }
  ],
  "location": "ProductSteps.i_receive_HTTP_response_code(int)"
});
formatter.result({
  "duration": 784800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PUT",
      "offset": 25
    }
  ],
  "location": "ProductSteps.response_error_BODY_for_is_empty(String)"
});
formatter.result({
  "duration": 142000,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Delete a product and expect 200 but received 204",
  "description": "",
  "id": "test-qa-app-controller-using-rest-api-testing-framework;delete-a-product-and-expect-200-but-received-204",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I send the DELETE request for most recently created \"/product\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I receive HTTP response code 204",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Response error BODY for \"DELETE\" is empty",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I send the GET request for \"/products\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I should receive the correct response with one deleted productID",
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.i_have_the_base_URL()"
});
formatter.result({
  "duration": 70600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/product",
      "offset": 53
    }
  ],
  "location": "ProductSteps.i_send_the_DELETE_request_for_most_recently_created(String)"
});
formatter.result({
  "duration": 68833900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 29
    }
  ],
  "location": "ProductSteps.i_receive_HTTP_response_code(int)"
});
formatter.result({
  "duration": 1422500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DELETE",
      "offset": 25
    }
  ],
  "location": "ProductSteps.response_error_BODY_for_is_empty(String)"
});
formatter.result({
  "duration": 169500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/products",
      "offset": 28
    }
  ],
  "location": "ProductSteps.i_send_the_GET_request_for(String)"
});
formatter.result({
  "duration": 46051600,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.i_should_receive_the_correct_response_with_one_deleted_productID()"
});
formatter.result({
  "duration": 1138100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Make a new Product with incorrect payload",
  "description": "",
  "id": "test-qa-app-controller-using-rest-api-testing-framework;make-a-new-product-with-incorrect-payload",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I send the POST request for \"/product\" with payload \"PostRequestError\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I should receive the correct error response code 400",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I should receive the correct error response payload with error desc \"\u0027price\u0027 is a required property\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.i_have_the_base_URL()"
});
formatter.result({
  "duration": 273800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/product",
      "offset": 29
    },
    {
      "val": "PostRequestError",
      "offset": 53
    }
  ],
  "location": "ProductSteps.i_send_the_POST_request_for_with_payload(String,String)"
});
formatter.result({
  "duration": 53720500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 49
    }
  ],
  "location": "ProductSteps.i_should_receive_the_correct_error_response_code(int)"
});
formatter.result({
  "duration": 1044500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027price\u0027 is a required property",
      "offset": 69
    }
  ],
  "location": "ProductSteps.i_should_receive_the_correct_error_response_payload_with_error_desc(String)"
});
formatter.result({
  "duration": 211500,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Delete a product with invalid product code",
  "description": "",
  "id": "test-qa-app-controller-using-rest-api-testing-framework;delete-a-product-with-invalid-product-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I send the DELETE request for \"/product/0\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I should receive the correct error response code 404",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I should receive the correct error response payload with error desc \"The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.i_have_the_base_URL()"
});
formatter.result({
  "duration": 66400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/product/0",
      "offset": 31
    }
  ],
  "location": "ProductSteps.i_send_the_DELETE_request_for(String)"
});
formatter.result({
  "duration": 39197500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 49
    }
  ],
  "location": "ProductSteps.i_should_receive_the_correct_error_response_code(int)"
});
formatter.result({
  "duration": 1380600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.",
      "offset": 69
    }
  ],
  "location": "ProductSteps.i_should_receive_the_correct_error_response_payload_with_error_desc(String)"
});
formatter.result({
  "duration": 192600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 52,
      "value": "#####  all the below tests are failing as there are errors in the code"
    }
  ],
  "line": 54,
  "name": "Create a new Product and expect 200",
  "description": "",
  "id": "test-qa-app-controller-using-rest-api-testing-framework;create-a-new-product-and-expect-200",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "I send the POST request for \"/product\" with payload \"PostRequest\"",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I receive HTTP response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Response error BODY for \"POST\" is not empty",
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.i_have_the_base_URL()"
});
formatter.result({
  "duration": 236200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/product",
      "offset": 29
    },
    {
      "val": "PostRequest",
      "offset": 53
    }
  ],
  "location": "ProductSteps.i_send_the_POST_request_for_with_payload(String,String)"
});
formatter.result({
  "duration": 69303400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "ProductSteps.i_receive_HTTP_response_code(int)"
});
formatter.result({
  "duration": 67808600,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c204\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:237)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat stepDefinition.ProductSteps.i_receive_HTTP_response_code(ProductSteps.java:124)\r\n\tat ✽.Then I receive HTTP response code 200(Product.feature:57)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "POST",
      "offset": 25
    }
  ],
  "location": "ProductSteps.response_error_BODY_for_is_not_empty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 61,
  "name": "Update a Product and expect 200",
  "description": "",
  "id": "test-qa-app-controller-using-rest-api-testing-framework;update-a-product-and-expect-200",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "I send the PUT request for \"/product/2\" with payload \"PutRequest\"",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I receive HTTP response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Response error BODY for \"PUT\" is not empty",
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.i_have_the_base_URL()"
});
formatter.result({
  "duration": 137500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/product/2",
      "offset": 28
    },
    {
      "val": "PutRequest",
      "offset": 54
    }
  ],
  "location": "ProductSteps.i_send_the_PUT_request_for_with_payload(String,String)"
});
formatter.result({
  "duration": 38850800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 29
    }
  ],
  "location": "ProductSteps.i_receive_HTTP_response_code(int)"
});
formatter.result({
  "duration": 1658400,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c204\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat stepDefinition.ProductSteps.i_receive_HTTP_response_code(ProductSteps.java:124)\r\n\tat ✽.Then I receive HTTP response code 200(Product.feature:64)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "PUT",
      "offset": 25
    }
  ],
  "location": "ProductSteps.response_error_BODY_for_is_not_empty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 68,
  "name": "Verify all fields for a product from the List of products",
  "description": "",
  "id": "test-qa-app-controller-using-rest-api-testing-framework;verify-all-fields-for-a-product-from-the-list-of-products",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 69,
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I send the GET request for \"/product/3\"",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I should receive the correct response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "response includes all the following",
  "rows": [
    {
      "cells": [
        "product_code",
        "3"
      ],
      "line": 73
    },
    {
      "cells": [
        "name",
        "Kids T-shirt"
      ],
      "line": 74
    },
    {
      "cells": [
        "product_price",
        "19.95"
      ],
      "line": 75
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.i_have_the_base_URL()"
});
formatter.result({
  "duration": 141500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/product/3",
      "offset": 28
    }
  ],
  "location": "ProductSteps.i_send_the_GET_request_for(String)"
});
formatter.result({
  "duration": 79890600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 43
    }
  ],
  "location": "ProductSteps.i_should_receive_the_correct_response_code(int)"
});
formatter.result({
  "duration": 760900,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.response_includes_all_the_following(String,String\u003e)"
});
formatter.result({
  "duration": 70186000,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path product_code doesn\u0027t match.\nExpected: \u003c3\u003e\n  Actual: null\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:261)\r\n\tat io.restassured.specification.ResponseSpecification$body$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:108)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat stepDefinition.ProductSteps.response_includes_all_the_following(ProductSteps.java:171)\r\n\tat ✽.And response includes all the following(Product.feature:72)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 78,
  "name": "Delete a product and expect 200",
  "description": "",
  "id": "test-qa-app-controller-using-rest-api-testing-framework;delete-a-product-and-expect-200",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 79,
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "I send the GET request for \"/products\"",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "I should receive the correct response code 200 and store the latest product code",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "I send the DELETE request for most recently created \"/product\"",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "I should receive the correct response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "Response error BODY for \"DELETE\" is not empty",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I send the GET request for \"/products\"",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "I should receive the correct response with one deleted productID",
  "keyword": "And "
});
formatter.match({
  "location": "ProductSteps.i_have_the_base_URL()"
});
formatter.result({
  "duration": 89300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/products",
      "offset": 28
    }
  ],
  "location": "ProductSteps.i_send_the_GET_request_for(String)"
});
formatter.result({
  "duration": 65377800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 43
    }
  ],
  "location": "ProductSteps.i_should_receive_the_correct_response_code_and_store_the_latest_product_code(int)"
});
formatter.result({
  "duration": 1174800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/product",
      "offset": 53
    }
  ],
  "location": "ProductSteps.i_send_the_DELETE_request_for_most_recently_created(String)"
});
formatter.result({
  "duration": 53562000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 43
    }
  ],
  "location": "ProductSteps.i_should_receive_the_correct_response_code(int)"
});
formatter.result({
  "duration": 1295700,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c204\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat stepDefinition.ProductSteps.i_should_receive_the_correct_response_code(ProductSteps.java:47)\r\n\tat ✽.Then I should receive the correct response code 200(Product.feature:83)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "DELETE",
      "offset": 25
    }
  ],
  "location": "ProductSteps.response_error_BODY_for_is_not_empty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "/products",
      "offset": 28
    }
  ],
  "location": "ProductSteps.i_send_the_GET_request_for(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductSteps.i_should_receive_the_correct_response_with_one_deleted_productID()"
});
formatter.result({
  "status": "skipped"
});
});