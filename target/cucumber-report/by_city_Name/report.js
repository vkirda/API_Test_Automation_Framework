$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/API_call_by_city_name/Get_weather_by_city_name.feature");
formatter.feature({
  "name": "Get weather info by city name",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Query to get some of weather API info by city name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@name"
    }
  ]
});
formatter.step({
  "name": "Weather info exists by city name \"Vilnius\" , temperature untis is \"metric\" , API key for the query is \"2beec5873ab01758d3e7877846f47c3b\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.weather_info_exists_by_city_name_temperature_untis_is_API_key_for_the_query_is(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response is retrieved",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.response_is_retrieved()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.status_code_is(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Content type should be \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.content_type_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "One of the headers \"Server\" should be \"openresty\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.content_lenght_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response contains country code \"LT\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.response_contains_country_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Query to check what happens if connecting without API key",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@name"
    }
  ]
});
formatter.step({
  "name": "Weather info exists by city name \"Vilnius\" , temperature untis is \"metric\" , API key is not provided",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.weather_info_exists_by_city_name_temperature_untis_is_API_key_is_not_provided(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response is retrieved",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.response_is_retrieved()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code should be 401",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.status_code_is(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Message should be \"Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.message_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Query to check what happens if city is non existing",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@name"
    }
  ]
});
formatter.step({
  "name": "Weather info not exists by city name \"Winterfell\" , temperature untis is \"metric\" , API key for the query is \"2beec5873ab01758d3e7877846f47c3b\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.weather_info_not_exists_by_city_name_temperature_untis_is_API_key_for_the_query_is(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response is retrieved",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.response_is_retrieved()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.status_code_is(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Message should be \"city not found\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.message_is(String)"
});
formatter.result({
  "status": "passed"
});
});