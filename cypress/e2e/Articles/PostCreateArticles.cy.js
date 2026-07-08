/// <reference types="cypress" />
import { apiRoute } from "../../support/apiRoutes"

describe('Create Articles', () => {
    it('Post Create Articles', function () {
        cy.loginToApplicationHeadless()
        cy.get('@accessToken').then(token => {
            cy.postCreateArticles(token)
        })
    })

    it('Create Articles - title cannot be blank', () => {
        cy.loginToApplicationHeadless()
        cy.get('@accessToken').then(token => {
            cy.blankTitleArticles(token).then(response => {
                expect(response.status).to.equal(422)
                expect(response.body.errors.title[0]).to.equal("can't be blank")
            })
        })
    });

    it('Create Articles - description cannot be blank', () => {
        cy.loginToApplicationHeadless()
        cy.get('@accessToken').then(token => {
            cy.blankDescriptionArticles(token).then(response => {
                expect(response.status).to.equal(422)
                expect(response.body.errors.description[0]).to.equal("can't be blank")
            })
        })
    });

    it('Create Articles - body cannot be blank', () => {
        cy.loginToApplicationHeadless()
        cy.get('@accessToken').then(token => {
            cy.blankBodyArticles(token).then(response => {
                expect(response.status).to.equal(422)
                expect(response.body.errors.body[0]).to.equal("can't be blank")
            })
        })
    });
})

