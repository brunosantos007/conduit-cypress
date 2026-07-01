/// <reference types="cypress" />

it('Get Comments', () => {
    cy.intercept('GET', '**/Discover-Bondar-Academy:-Your-Gateway-to-Efficient-Learning-1/comments', { fixture: 'GetComments.json' }).as('getComments')
    cy.loginToApplication()
    cy.wait(500)
    cy.get('.preview-link').first().click()
});
