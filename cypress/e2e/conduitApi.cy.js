/// <reference types="cypress" />

it('First Test', () => {

    cy.intercept('GET','**/tags', {fixture: 'tags.json'})
    cy.intercept('GET','**/articles*', {fixture: 'articles.json'})
    cy.loginToApplication()
});