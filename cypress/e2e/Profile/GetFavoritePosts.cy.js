/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Get Favorite Posts', function () {
    cy.loginToApplicationHeadless()

    cy.get('@accessToken').then(token => {
        cy.request({
            url: apiRoute.getFavoritePosts,
            method: 'GET',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })
})


