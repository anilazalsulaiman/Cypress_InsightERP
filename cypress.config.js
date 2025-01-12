const { defineConfig } = require("cypress");
const dayjs = require('dayjs'); // For timestamping
const timestamp = dayjs().format('YYYY-MM-DD_HH-mm-ss'); // Generate a timestamp

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: `cypress/reports/${timestamp}`, // Organize reports by timestamp
    overwrite: false,
    html: true,
    json: true,
    reportFilename: `[status]_[name]_${timestamp}`, // Customize file name with status and test name
    charts: true, // Add charts to reports
    embeddedScreenshots: true, // Embed screenshots in the report
    inlineAssets: true, // Inline CSS and JS in the report
  },
  e2e: {
    baseUrl: 'https://ytr.insemitech.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports , install "npm i --save-dev cypress-mochawesome-reporter"
    },
  },
});
