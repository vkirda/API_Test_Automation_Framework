$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/API_call_by_city_id/Get_weather_by_city_id.feature");
formatter.feature({
  "name": "Get weather info by city id",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Query to get some of weather API info by city id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@id"
    }
  ]
});
formatter.step({
  "name": "Weather info exists by city id \"596238\" , temperature untis is \"metric\" , API key for the query is \"2beec5873ab01758d3e7877846f47c3b\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.weather_info_exists_by_city_id_temperature_untis_is_API_key_for_the_query_is(String,String,String)"
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
  "name": "City name should be \"Palanga\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.city_name_should_be(String)"
});
formatter.result({
  "status": "passed"
});
});