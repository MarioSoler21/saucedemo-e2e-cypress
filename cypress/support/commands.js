// Custom commands for the Saucedemo tests
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.get('[data-test="username"]').should('be.visible').clear().type(username)
  cy.get('[data-test="password"]').should('be.visible').clear().type(password)
  cy.get('[data-test="login-button"]').should('be.visible').click()
})
