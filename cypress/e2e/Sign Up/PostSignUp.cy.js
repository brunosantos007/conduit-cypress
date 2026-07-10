/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import { apiRoute } from '../../support/apiRoutes';

const fakeEmail = faker.internet.email()
const fakePassword = faker.internet.password()
const fakeUserName = faker.internet.username()

// username is too short (minimum is 3 characters)
// password is too short (minimum is 8 characters)
// username is too long (maximum is 20 characters)
// password is too long (maximum is 20 characters)

it('Post Sign Up', () => {
    cy.postSignUp().then(response => {
            expect(response.status).to.equal(201)
        })
})

it('Post Sign Up - Fields cannot be blank', () => {
    cy.request({
            url: apiRoute.postSignUp,
            method: 'POST',
            failOnStatusCode: false,
            body: {
                "user": {
                    email: "",
                    password: "",
                    username: ""
                }
            }
        }).then(response => {
            expect(response.status).to.equal(422)
            expect(response.body.errors.email[0]).to.equal("can't be blank")
            expect(response.body.errors.username[0]).to.equal("can't be blank")
            expect(response.body.errors.password[0]).to.equal("can't be blank")
        })
})

it('Post Sign Up - Email is invalid', () => {
    cy.request({
            url: apiRoute.postSignUp,
            method: 'POST',
            failOnStatusCode: false,
            body: {
                "user": {
                    email: "teste.com",
                    password: fakePassword,
                    username: fakeUserName
                }
            }
        }).then(response => {
            expect(response.status).to.equal(422)
            expect(response.body.errors.email[0]).to.equal("is invalid")
        })
})

it('Post Sign Up - Username is too short (minimum is 3 characters)', () => {
    cy.request({
            url: apiRoute.postSignUp,
            method: 'POST',
            failOnStatusCode: false,
            body: {
                "user": {
                    email: fakeEmail,
                    password: fakePassword,
                    username: "DY"
                }
            }
        }).then(response => {
            expect(response.status).to.equal(422)
            expect(response.body.errors.username[0]).to.equal("is too short (minimum is 3 characters)")
        })
})

it('Post Sign Up - Username is too long (maximum is 20 characters)', () => {
    cy.request({
            url: apiRoute.postSignUp,
            method: 'POST',
            failOnStatusCode: false,
            body: {
                "user": {
                    email: fakeEmail,
                    password: fakePassword,
                    username: "DYjodnsfudsiufbsaibfibfigbfdubdgf"
                }
            }
        }).then(response => {
            expect(response.status).to.equal(422)
            expect(response.body.errors.username[0]).to.equal("is too long (maximum is 20 characters)")
        })
})

it('Post Sign Up - Password is too short (minimum is 8 characters)', () => {
    cy.request({
            url: apiRoute.postSignUp,
            method: 'POST',
            failOnStatusCode: false,
            body: {
                "user": {
                    email: fakeEmail,
                    password: "12345",
                    username: fakeUserName
                }
            }
        }).then(response => {
            expect(response.status).to.equal(422)
            expect(response.body.errors.password[0]).to.equal("is too short (minimum is 8 characters)")
        })
})

it('Post Sign Up - Password is too short (minimum is 8 characters)', () => {
    cy.request({
            url: apiRoute.postSignUp,
            method: 'POST',
            failOnStatusCode: false,
            body: {
                "user": {
                    email: fakeEmail,
                    password: "123456789101112131515134835",
                    username: fakeUserName
                }
            }
        }).then(response => {
            expect(response.status).to.equal(422)
            expect(response.body.errors.password[0]).to.equal("is too long (maximum is 20 characters)")
        })
})