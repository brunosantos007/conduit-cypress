/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Get Comments', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.getComments(token).then(response => {
            expect(response.status).to.equal(200)
        })
    })
})