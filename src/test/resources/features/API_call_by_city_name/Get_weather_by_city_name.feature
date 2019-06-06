Feature: Get weather info by city name 


@name 
Scenario: Query to get some of weather API info by city name 
	Given Weather info exists by city name "Vilnius" , temperature untis is "metric" , API key for the query is "2beec5873ab01758d3e7877846f47c3b" 
	When Response is retrieved 
	Then Status code should be 200 
	And Content type should be "application/json" 
	And One of the headers "Server" should be "openresty" 
	And Response contains country code "LT" 
	
@name 
Scenario: Query to check what happens if connecting without API key 
	Given Weather info exists by city name "Vilnius" , temperature untis is "metric" , API key is not provided 
	When Response is retrieved 
	Then Status code should be 401 
	And Message should be "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info." 
	
@name 
Scenario: Query to check what happens if city is non existing
	Given Weather info not exists by city name "Winterfell" , temperature untis is "metric" , API key for the query is "2beec5873ab01758d3e7877846f47c3b"
	When Response is retrieved 
	Then Status code should be 404 
	And Message should be "city not found"