# API_Test_Automation_Framework
API test automation framework using JAVA, Cucumber, REST assured, Testng, Maven

### Prerequisites.

In order test to work - need to instal JAVA and Maven.<br/>
I was using JAVA 11 building this framework.<br/>
JAVA jre and jdk installation guides: https://www.youtube.com/watch?v=Zx3ceLdFm64 and https://www.youtube.com/watch?v=poAoOjwFI2k;<br/>
Verify is Java instaled: at windows CMD type *java -version*;<br/>
Maven installation guide: https://www.youtube.com/watch?v=6AVC3X88z6E;<br/>
Verify is Maven instaled: type *mvn -v*.

### How to run it successfully.

#### Step 1.
Clone repository.

#### Step 2.
Go to directory, where *pom.xml* resides.<br/>
There should be these 3 xml files:<br/>
*testngSuiteCityById.xml*<br/>
*testngSuiteCityByName.xml*<br/>
*testngSuiteCityByNameAndById.xml*<br/>
Open command line the way that is explained here: https://www.youtube.com/watch?v=bgSSJQolR0E.<br/>

#### Step 3.
Then type: <br/>
*mvn clean test -Dsurefire.suiteXmlFiles=testngSuiteCityById.xml* or <br/>
*mvn clean test -Dsurefire.suiteXmlFiles=testngSuiteCityByName.xml* or <br/>
*mvn clean test -Dsurefire.suiteXmlFiles=testngSuiteCityByNameAndById.xml* and test should run.

### Results.

After test suites is run - reports is being generated in following locations:

Cucumber reports in html format: *(path to workspace directory)/API_Test_Automation_Framework/target/cucumber-report*.<br/>
Shurefire reports in html format: *(path to workspace directory)/API_Test_Automation_Framework/target/surefire-reports/emailable-report.html*.<br/>
