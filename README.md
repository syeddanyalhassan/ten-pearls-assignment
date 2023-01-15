# Ten pearls assessment assignment


Adding scripts in package.json

"scripts": {
    "ui-run":"cypress run --spec cypress/integration/testsuites/**.js --browser firefox --env allure=true",
    "allure-report":"allure generate allure-results --clean -o allure-report"
    
  }

To execute test, use following commands 

1) npm run ui-run

2) npm run allure-report

3) allure open
