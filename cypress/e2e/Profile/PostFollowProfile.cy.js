/// <reference types="cypress" />

import { apiRoute } from "../../support/apiRoutes"

it('Post Follow Profile', function () {
    cy.loginToApplicationHeadless()

    cy.get('@accessToken').then(token => {
        cy.request({
            url: apiRoute.getFollowUnfollowProfile,
            method: 'POST',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })
})


