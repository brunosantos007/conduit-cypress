/// <reference types="cypress" />

import { apiRoute } from "../../support/apiRoutes";

it('Put Profile', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.putProfile(token)
    })
});