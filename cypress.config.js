const { defineConfig } = require("cypress");
const { readPdf } = require('./cypress/support/helper');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  env: {},
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://sampleapp.tricentis.com/101/',

    setupNodeEvents(on, config) {
      on('task', {
        readPdf,

        // 👇 Nova task para verificar se o arquivo foi baixado
        isFileDownloaded(filename) {
          const filePath = path.join(__dirname, 'cypress', 'downloads', filename);
          return fs.existsSync(filePath);
        },
      });

      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
    },
  },
});