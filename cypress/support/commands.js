// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add('SearchProduct', (product) => {
  cy.get('#search-input').type(`${product}{enter}`, { force: true } );
})
Cypress.Commands.add('selectProductAndAddToCart', (index) => {
  // Select the for wich  product image you want 
  cy.get("img[class='lazy product-over lazy-not-on-mobile']").eq(index).click();
  // Click on the add to cart button
  cy.get('#buy-box').click();
});
Cypress.Commands.add('VerifyIncludesInUrl', (text) => {
  cy.url().should('include',text);
});


//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
