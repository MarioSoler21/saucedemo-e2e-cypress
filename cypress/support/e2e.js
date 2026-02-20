// Support file loaded before e2e specs
import './commands'

// Optionally fail tests on uncaught exceptions from the app
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
