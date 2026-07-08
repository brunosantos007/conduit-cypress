/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Get Articles Author', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.getArticlesAuthor(token).then(response => {
            expect(response.status).to.equal(200)
        })
    })
})