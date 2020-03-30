package utilities;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.LogDetail;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import io.restassured.specification.RequestSpecification;

import java.io.File;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Map;

public class BaseTest {

    private static RequestSpecification Request;
    ApiConfig apiConfig= new ApiConfig();
    private String BASE_URI = apiConfig.getPropertyValue("product.base.url");
    private String BASE_PATH = apiConfig.getPropertyValue("product.base.path");

    public BaseTest(){
        RequestSpecBuilder builder = new RequestSpecBuilder();
        builder.setBaseUri(BASE_URI);
        builder.setBasePath(BASE_PATH);
        builder.setContentType(ContentType.JSON);
        builder.setAccept(ContentType.JSON);
        builder.addFilter(new RequestLoggingFilter(LogDetail.ALL));
        builder.addFilter(new ResponseLoggingFilter(LogDetail.ALL));
        RequestSpecification requestSpec = builder.build();
        Request = RestAssured.given().spec(requestSpec);
    }

    public static ResponseOptions<Response> GetRespwithqueryParams(String url, Map<String, Object> pathParams) {
        Request.queryParams(pathParams);
        try {
            return Request.get(new URI(url));
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        return null;
    }
    public static void GetOpsWithPathParameter(String url, Map<String, String> pathParams) {
        Request.pathParams(pathParams);
        try {
            Request.get(new URI(url));
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }

    }
    public static ResponseOptions<Response> GetOps(String url) {
        try {
            return Request.get(new URI(url));
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static ResponseOptions<Response> PostOpsWithFileBody(String url,File body)   {
        Request.body(body);
        return Request.post(url);
    }
    public static ResponseOptions<Response> PutOpsWithFileBody(String url,File body)   {
        Request.body(body);
        return Request.put(url);
    }
    public static ResponseOptions<Response> DeleteOps(String url)  {
        return Request.delete(url);
    }

}
