/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Get Articles', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.getArticles().then(response => {
            expect(response.status).to.equal(200)
        })
    })
})