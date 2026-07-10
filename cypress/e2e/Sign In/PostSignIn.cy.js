/// <reference types="cypress" />

import { apiRoute } from "../../support/apiRoutes"

it('Post Sign In', () => {
    cy.postSignIn().then(response => {
            expect(response.status).to.equal(200)
        })
})

it('Post Sign In - It cannot be blank both', () => {
    cy.request({
            url: apiRoute.postSignIn,
            method: 'POST',
            failOnStatusCode: false,
            body: {
                user: {
                    email: "",
                    password: ""
                }
            }
        }).then(response => {
            expect(response.status).to.equal(422)
            expect(response.body.errors.email[0]).to.equal("can't be blank")
        })
});

it('Post Sign In - Email is invalid', () => {
    cy.request({
            url: apiRoute.postSignIn,
            method: 'POST',
            failOnStatusCode: false,
            body: {
                user: {
                    email: "MasterPiece@",
                    password: "Welcome12345"
                }
            }
        }).then(response => {
            expect(response.status).to.equal(403)
            expect(response.body.errors["email or password"][0]).to.equal("is invalid")
        })
});

it('Post Sign In - Password is invalid', () => {
    cy.request({
            url: apiRoute.postSignIn,
            method: 'POST',
            failOnStatusCode: false,
            body: {
                user: {
                    email: "MasterPiece@qqq.com",
                    password: "12345"
                }
            }
        }).then(response => {
            expect(response.status).to.equal(403)
            expect(response.body.errors["email or password"][0]).to.equal("is invalid")
        })
});

it('Post Sign In - Password cannot be blank', () => {
    cy.request({
            url: apiRoute.postSignIn,
            method: 'POST',
            failOnStatusCode: false,
            body: {
                user: {
                    email: "MasterPiece@qqq.com",
                    password: ""
                }
            }
        }).then(response => {
            expect(response.status).to.equal(422)
            expect(response.body.errors.password[0]).to.equal("can't be blank")
        })
});

it('Post Sign In - Email cannot be blank', () => {
    cy.request({
            url: apiRoute.postSignIn,
            method: 'POST',
            failOnStatusCode: false,
            body: {
                user: {
                    email: "",
                    password: "Welcome12345"
                }
            }
        }).then(response => {
            expect(response.status).to.equal(422)
            expect(response.body.errors.email[0]).to.equal("can't be blank")
        })
});