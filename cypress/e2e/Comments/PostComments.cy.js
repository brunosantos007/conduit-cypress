/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Post Comments', function () {
    cy.loginToApplicationHeadless()
    cy.get('@accessToken').then(token => {
        cy.postComments(token)
        cy.getComments(token).then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.comments.length).to.be.greaterThan(0)
            expect(response.body.comments[0].id).to.exist
            expect(response.body.comments[0].id).to.be.a('number')
        })
    })
})