/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Delete Unfollow Profile', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.delUnfollowProfile(token).then(response => {
            expect(response.status).to.equal(200)
        })
    })
})