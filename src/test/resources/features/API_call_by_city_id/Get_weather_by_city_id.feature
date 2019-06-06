Feature: Get weather info by city id 


@id 
Scenario: Query to get some of weather API info by city id 
	Given Weather info exists by city id "596238" , temperature untis is "metric" , API key for the query is "2beec5873ab01758d3e7877846f47c3b" 
	When Response is retrieved 
	Then Status code should be 200 
	And Content type should be "application/json" 
	And City name should be "Palanga" 