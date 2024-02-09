describe('Swag Labs Testing', () => {
  beforeEach('Open right URL', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })
  it('Happy path', () => {
    // Type username
    cy.get('input#user-name').type('standard_user')
    // Type password
    cy.get('input#password').type('secret_sauce')
    // Click on the login button
    cy.get('input#login-button').click()
  })
  it('Invalid Username', () => {
    // Type username
    cy.get('input#user-name').type('the_bruh')
    // Type password
    cy.get('input#password').type('secret_sauce')
    // Click on the login button
    cy.get('input#login-button').click()
  })
  it('Invalid Password', () => {
    // Type username
    cy.get('input#user-name').type('standard_user')
    // Type password
    cy.get('input#password').type('the_bruh')
    // Click on the login button
    cy.get('input#login-button').click()
  })
  it('Blank Username', () => {
    // Don't type username

    // Type password
    cy.get('input#password').type('secret_sauce')
    // Click on the login button
    cy.get('input#login-button').click()
  })
  it('Blank Password', () => {
    // Type username
    cy.get('input#user-name').type('standard_user')
    // Don't type password

    // Click on the login button
    cy.get('input#login-button').click()
  })
  describe('AddToCart feature', () => {
    beforeEach('Log in', () => {
      cy.get('input#user-name').type('standard_user')
      // Type password
      cy.get('input#password').type('secret_sauce')
      // Click on the login button
      cy.get('input#login-button').click()
    })
    it('Adding to cart', () => {
      cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[6]/div[3]/button').click()
    })
    it('Removing item from the cart', () => {
      cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[6]/div[3]/button').click()
      cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[6]/div[3]/button').click()
    })
  })
  describe('Checkout Feature', () => {
    beforeEach('Log in', () => {
      cy.get('input#user-name').type('standard_user')
      // Type password
      cy.get('input#password').type('secret_sauce')
      // Click on the login button
      cy.get('input#login-button').click()
    })
    it('Adding to cart', () => {
      cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[6]/div[3]/button').click()
      cy.get('svg[data-icon="shopping-cart"]').click()
      cy.get('a.btn_action.checkout_button').click()
      cy.get('input#first-name').type('The')
      cy.get('input#last-name').type('Bruh')
      cy.get('input#postal-code').type('4700-028')
      cy.get('input.btn_primary.cart_button').click()
      cy.get('a.btn_action.cart_button').click()
    })
})
})