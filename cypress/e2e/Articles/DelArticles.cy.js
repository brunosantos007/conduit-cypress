/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Delete Articles', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.delArticles(token)
    })
})