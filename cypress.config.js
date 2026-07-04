const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: "https://conduit.bondaracademy.com"
    },
  },
});
