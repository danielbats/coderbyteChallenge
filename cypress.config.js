const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  viewportHeight: 720,
  viewportWidth: 1280,
  env: {
    baseUrl: 'https://duckduckgo.com',
    footballOrgUrl: 'https://www.football-data.org',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    }
  }
})
