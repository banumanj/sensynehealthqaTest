package stepDefinition;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import io.restassured.response.ValidatableResponse;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import utilities.BaseTest;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.hamcrest.Matchers.equalTo;
import static org.testng.Assert.*;

public class ProductSteps {
    private static ResponseOptions<Response> response;
    public static BaseTest baseTest = new BaseTest();
    private ValidatableResponse json;
    private static String getProductName = null;
    private static String getProductPrice=null;
    private static Integer getProductID = 0;
    private boolean userNameFoundFlag=false;
    private static File jsonDataInFile = null;
    private static String atualErrorResponse=null;
    private static Integer totalCountOfProducts=0;
    private static Integer highestProductId=0;
    public static Map<String, Integer> parameters = new HashMap<>();
    private static Integer deletedHighestProductId;


    @Given("^I have the base URL$")
    public void i_have_the_base_URL() throws Throwable {
        System.out.println("baseUrl is set ");
    }

    @Then("^I should receive the correct response code (\\d+)$")
    public void i_should_receive_the_correct_response_code(int statusCode) throws Throwable {
        //assertEquals(response.getStatusCode(), statusCode);
        json = response.thenReturn().then().statusCode(statusCode);
    }

    @Then("^response includes the following$")
    public void response_includes_the_following(DataTable dataTable) throws Throwable {
        List<List<String>> list = dataTable.asLists(String.class);
        String name=list.get(1).get(0);
        json.body("name", equalTo(name));
    }

    @When("^I send the GET request for \"([^\"]*)\"$")
    public void i_send_the_GET_request_for(String url) throws Throwable {
        response = BaseTest.GetOps(url);
    }

    @Then("^response include list of ALL products with the following$")
    public void response_include_list_of_ALL_products_with_the_following(DataTable dataTable) throws Throwable {
        List<List<String>> list = dataTable.asLists(String.class);
        String name=list.get(1).get(0);
        String product_price = list.get(1).get(1);
        JSONArray arr = new JSONArray(response.thenReturn().asString());
        totalCountOfProducts=arr.length();
        highestProductId= arr.getJSONObject(totalCountOfProducts-1).getInt("id");

        parameters.put("totalCountOfProducts", totalCountOfProducts);
        parameters.put("highestProductId", highestProductId);

        for (int i = 0; i < totalCountOfProducts; i++) {
            getProductName = arr.getJSONObject(i).getString("name");
            getProductPrice = arr.getJSONObject(i).getString("price");
            if (getProductName.contentEquals(name) && getProductPrice.contentEquals(product_price)) {
                userNameFoundFlag = true;
                break;
            }
        }
        assertTrue(userNameFoundFlag,"Name and price " + name + product_price+" not found in response");
    }

    @Then("^I should receive the correct response code (\\d+) and store the latest product code$")
    public void i_should_receive_the_correct_response_code_and_store_the_latest_product_code(int statusCode) throws Throwable {
        json = response.thenReturn().then().statusCode(statusCode);
        assertEquals(response.getStatusCode(),statusCode);
        JSONArray arr = new JSONArray(response.thenReturn().asString());
        totalCountOfProducts=arr.length();
        highestProductId= arr.getJSONObject(totalCountOfProducts-1).getInt("id");

        parameters.put("totalCountOfProducts", totalCountOfProducts);
        parameters.put("highestProductId", highestProductId);
    }
    @When("^I send the POST request for \"([^\"]*)\" with payload \"([^\"]*)\"$")
    public void i_send_the_POST_request_for_with_payload(String url, String requestType) throws Throwable {
        uploadRequest(url,requestType);
        System.out.println(response.body().prettyPrint());
    }

    public void uploadRequest(String url, String requestType) {
        if (requestType.equals("PostRequest")) {
            jsonDataInFile = new File("src/main/resources/Json/PostRequest.json");
            response = BaseTest.PostOpsWithFileBody(url, jsonDataInFile);
        } else if (requestType.equals("PutRequest")) {
            jsonDataInFile = new File("src/main/resources/Json/PutRequest.json");
            response = BaseTest.PutOpsWithFileBody(url, jsonDataInFile);
        } else if (requestType.equals("PostRequestError")) {
            jsonDataInFile = new File("src/main/resources/Json/PostRequestError.json");
            response = BaseTest.PostOpsWithFileBody(url, jsonDataInFile);
        }
    }

    @Then("^I receive invalid HTTP response code (\\d+)$")
    public void i_receive_invalid_HTTP_response_code(int statusCode) throws Throwable {
        json = response.thenReturn().then().statusCode(statusCode);
        assertEquals(response.getStatusCode(),statusCode);
    }


    @Then("^I receive HTTP response code (\\d+)$")
    public void i_receive_HTTP_response_code(int statusCode) throws Throwable {
        json = response.thenReturn().then().statusCode(statusCode);
        assertEquals(response.getStatusCode(),statusCode);
    }


    @Then("^Response error BODY for \"([^\"]*)\" is empty$")
    public void response_error_BODY_for_is_empty(String requestType) throws Throwable {
        assertEquals(response.thenReturn().asString(), "");
    }

    @When("^I send the PUT request for \"([^\"]*)\" with payload \"([^\"]*)\"$")
    public void i_send_the_PUT_request_for_with_payload(String url, String requestBody) throws Throwable {
        uploadRequest(url,requestBody);
        System.out.println(response.body().prettyPrint());
    }
    @When("^I send the PUT request for most recently created \"([^\"]*)\" with payload \"([^\"]*)\"$")
    public void i_send_the_PUT_request_for_most_recently_created_with_payload(String url, String requestBody) throws Throwable {
        System.out.println("Total Count of products "+totalCountOfProducts);
        System.out.println("Last Created product id "+highestProductId);
        url=url+"/"+parameters.get("highestProductId");
        uploadRequest(url,requestBody);
        System.out.println(response.body().prettyPrint());
    }

    @When("^I send the DELETE request for \"([^\"]*)\"$")
    public void i_send_the_DELETE_request_for(String url) throws Throwable {
        response = BaseTest.DeleteOps(url);
    }


    @Then("^I should receive the correct error response code (\\d+)$")
    public void i_should_receive_the_correct_error_response_code(int statusCode) throws Throwable {
        //assertEquals(response.getStatusCode(),statusCode);
        json = response.thenReturn().then().statusCode(statusCode);
    }

    @Then("^I should receive the correct error response payload with error desc \"([^\"]*)\"$")
    public void i_should_receive_the_correct_error_response_payload_with_error_desc(String errorResponse) throws Exception {
        atualErrorResponse = (String) new JSONObject(response.thenReturn().asString()).get("detail");
        assertEquals(atualErrorResponse ,errorResponse);

    }

    @Then("^response includes all the following$")
    public void response_includes_all_the_following(Map<String,String> responseFields) throws Throwable {
        for (Map.Entry<String, String> field : responseFields.entrySet()) {
            if(StringUtils.isNumeric(field.getValue())){
                json.body(field.getKey(), equalTo(Integer.parseInt(field.getValue())));
            }
            else{
                json.body(field.getKey(), equalTo(field.getValue()));
            }
        }
    }

    @Then("^Response error BODY for \"([^\"]*)\" is not empty$")
    public void response_error_BODY_for_is_not_empty(String requestType) throws Throwable {
        requestType="";
        deletedHighestProductId=highestProductId;
        assertNotEquals(response.thenReturn().asString(), requestType);
        //assertNotSame(response.getBody().toString(),requestType);

    }

    @When("^I send the DELETE request for most recently created \"([^\"]*)\"$")
    public void i_send_the_DELETE_request_for_most_recently_created(String url) throws Throwable {
        System.out.println("Total Count of products "+totalCountOfProducts);
        System.out.println("Last Created product id "+highestProductId);

        response = BaseTest.DeleteOps(url+"/"+parameters.get("highestProductId"));
        // System.out.println(response.body().prettyPrint());
    }

    @Then("^I should receive the correct response with one deleted productID$")
    public void i_should_receive_the_correct_response_with_one_deleted_productID() throws Throwable {
        JSONArray arr = new JSONArray(response.thenReturn().asString());
        totalCountOfProducts=arr.length();
        highestProductId=arr.getJSONObject(totalCountOfProducts-1).getInt("id");
        for (int i = 0; i < totalCountOfProducts; i++) {
            getProductID = arr.getJSONObject(i).getInt("id");
            if (getProductID==deletedHighestProductId) {
                userNameFoundFlag = true;
                break;
            }
        }
        assertFalse(userNameFoundFlag,"Deleted product code " + deletedHighestProductId +" found in response");
    }
}
