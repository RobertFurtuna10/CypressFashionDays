const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  env:{
    MAILOSAUR_API_KEY:"zhEpqXfzdtvVaIbbKf8rzg2vQkh3OnFh",
    //global env 
    url:"https://www.fashiondays.ro/", 
    registerUrl:"https://www.fashiondays.ro/customer/authentication/register",
    loginUrl:"https://www.fashiondays.ro/customer/authentication"
    
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //for html esport
    },
    specPattern:'cypress/integration/tests/*.js'
  },
});

