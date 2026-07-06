/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

it('Post Sign Up', () => {
    const fakeEmail = faker.internet.email()
    const fakePassword = faker.internet.password()
    const fakeUserName = faker.internet.username()
    cy.request({
            url: 'https://conduit-api.bondaracademy.com/api/users',
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


