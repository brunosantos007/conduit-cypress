/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

it('Get Profile', function () {
    cy.loginToApplicationHeadless()

    cy.get('@accessToken').then(token => {
        cy.request({
            url: apiRoute.getProfile,
            method: 'GET',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('profile')
            const profile = response.body.profile

            expect(profile.username).to.equal('bnm')
            expect(profile.bio).to.be.a('string').and.not.be.empty
            expect(profile.image).to.be.a('string').and.include('https')
            expect(profile.following).to.be.a('boolean').and.equal(false)
        })
    })
})


