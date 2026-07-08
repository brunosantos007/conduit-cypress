/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Get Profile', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.getProfile(token)
    })
})