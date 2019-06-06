package suiteRunners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		features = { "src/test/resources" }, 
		tags = { "@id" }, 
		glue = "stepDefinitions", 
		plugin = { "pretty", "html:target/cucumber-report/by_city_id" }, 
		monochrome = true)
public class RunWeatherByIdTestSuite extends AbstractTestNGCucumberTests{

}
