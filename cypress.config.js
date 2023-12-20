const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://uitestingplayground.com/ajax",
    viewportHeight: 600,
    viewportWidth: 800,
    experimentalStudio: true
  },
});
