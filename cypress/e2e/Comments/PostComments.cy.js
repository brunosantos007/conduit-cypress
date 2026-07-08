/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Post Comments', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.postComments(token)
    })
})