pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        withMaven() {
          bat 'mvn clean test -Dsurefire.suiteXmlFiles=testngSuiteCityByNameAndById.xml'
        }

      }
    }
  }
}