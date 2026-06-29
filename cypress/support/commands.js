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
    Cypress.Commands.add('loginToApplication', () => {
        cy.visit('https://conduit.bondaracademy.com')
        cy.contains('Sign in').click()
        cy.get('[placeholder="Email"]').type('MasterPiece@qqq.com')
        cy.get('[placeholder="Password"]').type('Welcome12345')
        cy.contains('button', 'Sign in').click()
    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })