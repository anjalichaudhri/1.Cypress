const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  on('before:run', (details) => {
    let testId = 'test';
    console.log('configs', details.config.env);
    config= {
      ...config,
      testId
    }
  })
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: 'kazurt',
  reporter: 'mochawesome',
  //set default timeout
  defaultCommandTimeout: 6000,
  // for special test case which takes longer time use command: Cypress.config('defaultCommandTimeout',8000) in your function 
  env: {
    angularPracticeUrl: "https://rahulshettyacademy.com/angularpractice/",
    regionId: "",
    regionName: "",
  },
  retries: {
    runMode: 1,
  },
  e2e: {    
    setupNodeEvents,
    // specPattern: 'cypress/integration/examples/*.js',
    // specPattern: 'cypress/specs/*.js'
    // specPattern: 'cypress/Test/*.feature'
    specPattern: 'cypress/xpath-practice/*.js'
  },
  viewportWidth:1256,
  viewportHeight: 1076
});
