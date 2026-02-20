describe('SauceDemo - Checkout flow', () => {
  const user = 'standard_user'
  const pass = 'secret_sauce'

  before(() => {
    // ensure baseUrl is used via cy.visit('/') in command
  })

  it('should login, add 2 products, checkout and validate order complete', () => {
    // Login using custom command
    cy.login(user, pass)

    // Assert landed on inventory page
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')

    // Add exactly 2 products using data-test selectors
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click()

    // Validate cart badge shows 2
    cy.get('.shopping_cart_badge').should('have.text', '2')

    // Go to cart and validate there are 2 items and they are the expected ones
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.cart_item').should('have.length', 2)
    cy.get('.cart_item .inventory_item_name').then(($names) => {
      const texts = $names.map((i, el) => Cypress.$(el).text()).get()
      expect(texts).to.include('Sauce Labs Backpack')
      expect(texts).to.include('Sauce Labs Bike Light')
    })

    // Checkout: start
    cy.get('[data-test="checkout"]').should('be.visible').click()
    cy.url().should('include', '/checkout-step-one.html')

    // Fill info
    cy.get('[data-test="firstName"]').type('Mario')
    cy.get('[data-test="lastName"]').type('Soler')
    cy.get('[data-test="postalCode"]').type('21101')
    cy.get('[data-test="continue"]').click()

    // On overview page
    cy.url().should('include', '/checkout-step-two.html')
    // Optionally assert items to be purchased are listed on overview
    cy.get('.cart_item').should('have.length.gte', 1)

    // Finish
    cy.get('[data-test="finish"]').click()

    // Validate exact thank you text and URL contains expected path
    cy.get('.complete-header')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')
    cy.url().should('include', '/checkout-complete.html')
  })
})
