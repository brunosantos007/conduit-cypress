/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import { apiRoute } from '../../support/apiRoutes';

it('Post Sign Up', () => {
    cy.postSignUp().then(response => {
            expect(response.status).to.equal(201)
        })
})