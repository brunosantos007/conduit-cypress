/// <reference types="cypress" />

it('Get Profile', () => {
    cy.intercept('GET', '**/profiles/bnm', { fixture: 'GetProfiles.json' }).as('getProfile')
    cy.loginToApplication()
    cy.get('a[href="/profile/bnm"]').should('contain', 'bnm').click()
});
