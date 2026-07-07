const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kfrojw',
  allowCypressEnv: true,

  e2e: {
    baseUrl: "https://conduit-api.bondaracademy.com",
    experimentalRunAllSpecs: true,

    setupNodeEvents(on, config) {
      // eventos do Node aqui, se você precisar
      return config;
    },
  },
});
