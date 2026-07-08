/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Delete Comments', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.delComments(token)
    })
})
