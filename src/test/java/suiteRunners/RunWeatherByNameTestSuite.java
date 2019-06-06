package suiteRunners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		features = { "src/test/resources" }, 
		tags = { "@name" }, 
		glue = "stepDefinitions", 
		plugin = { "pretty", "html:target/cucumber-report/by_city_Name" }, 
		monochrome = true)
public class RunWeatherByNameTestSuite extends AbstractTestNGCucumberTests {

}
