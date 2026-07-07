/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import { apiRoute } from '../../support/apiRoutes';

it('Post Sign Up', () => {
    const fakeEmail = faker.internet.email()
    const fakePassword = faker.internet.password()
    const fakeUserName = faker.internet.username()
    cy.request({
            url: apiRoute.postSignUp,
            method: 'POST',
            body: {
                "user": {
                    email: fakeEmail,
                    password: fakePassword,
                    username: fakeUserName
                }
            }
        }).then(response => {
            expect(response.status).to.equal(201)
        })
})


