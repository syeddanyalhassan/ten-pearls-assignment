# CypressSampleFixturesTest


Adding scripts in package.json

"scripts": {
    "ui-run":"cypress run --spec cypress/integration/testsuites/**.js --env allure=true",
    "allure-report":"allure generate allure-results --clean -o allure-report"
    
  }

Commands to run

to open cypress dashboard

npx cypress open 

To run test

npm run ui-run

npm run allure-report

allure open
