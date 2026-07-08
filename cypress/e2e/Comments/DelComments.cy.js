/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Delete Comments', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.delComments(token)
        cy.getComments(token).then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.comments).to.be.empty
        })
    })
})
