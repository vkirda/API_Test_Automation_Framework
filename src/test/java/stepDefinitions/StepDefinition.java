package stepDefinitions;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalToObject;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class StepDefinition {

    private RequestSpecification request;
    private Response response;
    private ValidatableResponse json;

    private final String BASE_ENDPOINT = "http://api.openweathermap.org/data/2.5/weather";

    @Given("Weather info exists by city name {string} , temperature units is {string} , API key for the query is {string}")
    public void weather_info_exists_by_city_name_temperature_units_is_API_key_for_the_query_is(String cityName,
                                                                                               String tempUnits,
                                                                                               String apiKey) {

        request = given()
                .queryParam("q", cityName)
                .queryParam("units", tempUnits)
                .queryParam("appid", apiKey);
    }

    @When("Response is retrieved")
    public void response_is_retrieved() {

        response = request.when()
                .get(BASE_ENDPOINT);

    }

    @Then("Status code should be {int}")
    public void status_code_is(Integer statusCode) {

        json = response.then()
                .statusCode(statusCode);

    }

    @Then("Content type should be {string}")
    public void content_type_is(String contentType) {

        json.contentType(contentType);

    }

    @Then("One of the headers {string} should be {string}")
    public void content_length_is(String expectedHeader, String expectedHeaderValue) {

        json.header(expectedHeader, expectedHeaderValue);

    }

    @Then("Response contains country code {string}")
    public void response_contains_country_code(String countryCode) {

        json.body("sys.country", equalToObject(countryCode));

    }

    @Given("Weather info exists by city name {string} , temperature units is {string} , API key is not provided")
    public void weather_info_exists_by_city_name_temperature_units_is_API_key_is_not_provided(String cityName, String tempUnits) {

        request = given()
                .queryParam("q", cityName)
                .queryParam("units", tempUnits);
    }

    @Then("Message should be {string}")
    public void message_is(String expectedMessage) {

        json.body("message", equalToObject(expectedMessage));
    }

    @Given("Weather info not exists by city name {string} , temperature units is {string} , API key for the query is {string}")
    public void weather_info_not_exists_by_city_name_temperature_units_is_API_key_for_the_query_is(String cityName,
                                                                                                   String tempUnits,
                                                                                                   String apiKey) {

        request = given()
                .queryParam("q", cityName)
                .queryParam("units", tempUnits)
                .queryParam("appid", apiKey);
    }

    @Given("Weather info exists by city id {string} , temperature units is {string} , API key for the query is {string}")
    public void weather_info_exists_by_city_id_temperature_units_is_API_key_for_the_query_is(String cityId,
                                                                                             String tempUnits,
                                                                                             String apiKey) {

        request = given()
                .queryParam("id", cityId)
                .queryParam("units", tempUnits)
                .queryParam("appid", apiKey);
    }

    @Then("City name should be {string}")
    public void city_name_should_be(String expectedName) {

        json.body("name", equalToObject(expectedName));
    }

    @Then("Response contains temperature value of {string} degrees celsius")
    public void response_contains_temperature_value_of_degrees_celsius(String expectedTemp) {

        json.body("main.temp_min", equalToObject(expectedTemp));
    }

}
