// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import { apiRoute } from "./apiRoutes"
import { faker } from '@faker-js/faker';

// -- This is a parent command --
    Cypress.Commands.add('loginToApplicationHeadless', () => {
        cy.request({
            url: 'https://conduit-api.bondaracademy.com/api/users/login',
            method: 'POST',
            body: {
                user: {
                    email: "MasterPiece@qqq.com",
                    password: "Welcome12345"
                }
            }
        }).then(response => {
            expect(response.status).to.equal(200)

            const accessToken = 'Token ' + response.body.user.token

            cy.wrap(accessToken).as('accessToken')
        })
})

// Articles

Cypress.Commands.add('delArticles', (token) => {
    cy.request({
            url: apiRoute.getArticles,
            method: 'GET',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
            const articles = response.body.articles
            if (articles.length >= 1) {
                const idComment = articles[0]
                cy.request({
                    url: apiRoute.deleteArticle,
                    method: 'DELETE',
                    headers: { Authorization: token }
                }).then(response => {
                    expect(response.status).to.equal(204)
                })

            } else {
                cy.request({
                    url: apiRoute.postCreateArticles,
                    method: 'POST',
                    headers: { Authorization: token },
                    body: {
                        article: {
                            title: "API Automation",
                            description: "API",
                            body: "The Api should be automated every single time? Well, we will discover reading this article here",
                            tagList: [
                                "@api @call @automation"
                            ]
                    }
            }
                }).then(response => {
                    expect(response.status).to.equal(201)
                    cy.request({
                        url: apiRoute.deleteArticle,
                        method: 'DELETE',
                        headers: { Authorization: token }
                    }).then(response => {
                        expect(response.status).to.equal(204)
                    })
                })
            }
        })
})

Cypress.Commands.add('delFavoriteArticles', (token) => {
    cy.request({
            url: apiRoute.deleteFavoriteArticle,
            method: 'DELETE',
            headers: { Authorization: token }
        })
})

Cypress.Commands.add('getArticles', (token) => {
    cy.request({
            url: apiRoute.getArticles,
            method: 'GET',
            headers: { Authorization: token }
        })
})

Cypress.Commands.add('getArticlesAuthor', (token) => {
    cy.request({
            url: apiRoute.getArticlesAuthor,
            method: 'GET',
            headers: { Authorization: token }
        })
})

Cypress.Commands.add('postCreateArticles', (token) => {
    cy.request({
            url: apiRoute.postCreateArticles,
            method: 'GET',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
            const articles = response.body.articles
            if (articles.length >= 1) {
                const idComment = articles[0]
                cy.request({
                    url: apiRoute.deleteArticle,
                    method: 'DELETE',
                    headers: { Authorization: token }
                }).then(response => {
                    expect(response.status).to.equal(204)
                })

                cy.request({
                    url: apiRoute.createArticle,
                    method: 'POST',
                    headers: { Authorization: token },
                    body: {
                        article: {
                            title: "API Automation",
                            description: "API",
                            body: "The Api should be automated every single time? Well, we will discover reading this article here",
                            tagList: [
                                "@api @call @automation"
                            ]
                    }
            }
                }).then(response => {
                    expect(response.status).to.equal(201) 
                })

            } else {
                cy.request({
                    url: apiRoute.createArticle,
                    method: 'POST',
                    headers: { Authorization: token },
                    body: {
                        article: {
                            title: "API Automation",
                            description: "API",
                            body: "The Api should be automated every single time? Well, we will discover reading this article here",
                            tagList: [
                                "@api @call @automation"
                            ]
                    }
            }
                }).then(response => {
                    expect(response.status).to.equal(201) 
                })
            }
        })
})

Cypress.Commands.add('postFavoriteArticles', (token) => {
    cy.request({
        url: apiRoute.postFavoriteArticles,
        method: 'POST',
        headers: { Authorization: token }
    })
})

Cypress.Commands.add('blankTitleArticles', (token) => {
    cy.request({
                url: apiRoute.createArticle,
                method: 'POST',
                headers: { Authorization: token },
                failOnStatusCode: false,
                body: {
                    article: {
                        title: "",
                        description: "",
                        body: "",
                        tagList: [""]
                    }
                }
            })
})

Cypress.Commands.add('blankDescriptionArticles', (token) => {
    cy.request({
                url: apiRoute.createArticle,
                method: 'POST',
                headers: { Authorization: token },
                failOnStatusCode: false,
                body: {
                    article: {
                        title: "API Automation",
                        description: "",
                        body: "The Api should be automated every single time? Well, we will discover reading this article here",
                        tagList: ["@api @call @automation"]
                    }
                }
            })
})

Cypress.Commands.add('blankBodyArticles', (token) => {
    cy.request({
                url: apiRoute.createArticle,
                method: 'POST',
                headers: { Authorization: token },
                failOnStatusCode: false,
                body: {
                    article: {
                        title: "API Automation",
                        description: "API",
                        body: "",
                        tagList: ["@api @call @automation"]
                    }
                }
            })
})

// Comments

Cypress.Commands.add('delComments', (token) => {
    cy.request({
            url: apiRoute.getComments,
            method: 'GET',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
            const comments = response.body.comments
            if (comments.length >= 1) {
                const idComment = comments[0].id
                cy.request({
                    url: `${apiRoute.getComments}/${idComment}`,
                    method: 'DELETE',
                    headers: { Authorization: token }
                }).then(response => {
                    expect(response.status).to.equal(200)
                })

            } else {
                cy.request({
                    url: apiRoute.getComments,
                    method: 'POST',
                    headers: { Authorization: token },
                    body: {
                        comment: {
                            body: "TesteELSE"
                        }
                    }
                }).then(response => {
                    expect(response.status).to.equal(200)
                    const createdId = response.body.comment.id
                    cy.request({
                        url: `${apiRoute.getComments}/${createdId}`,
                        method: 'DELETE',
                        headers: { Authorization: token }
                    }).then(response => {
                        expect(response.status).to.equal(200)
                    })
                })
            }
        })
})

Cypress.Commands.add('getComments', (token) => {
    cy.request({
            url: apiRoute.getComments,
            method: 'GET',
            headers: { Authorization: token }
        })
})

Cypress.Commands.add('postComments', (token) => {
    cy.request({
            url: apiRoute.getComments,
            method: 'GET',
            headers: { Authorization: token }
        }).then(response => {
            expect(response.status).to.equal(200)
            const comments = response.body.comments

            if (comments.length >= 1) {
                const idComment = comments[0].id
                cy.request({
                    url: `${apiRoute.getComments}/${idComment}`,
                    method: 'DELETE',
                    headers: { Authorization: token }
                }).then(response => {
                    expect(response.status).to.equal(200)
                })
                cy.request({
                    url: apiRoute.getComments,
                    method: 'POST',
                    headers: { Authorization: token },
                    body: {
                        comment: {
                            body: "TesteIF"
                        }
                    }
                }).then(response => {
                    expect(response.status).to.equal(200)
                })
            } else {
                cy.request({
                    url: apiRoute.getComments,
                    method: 'POST',
                    headers: { Authorization: token },
                    body: {
                        comment: {
                            body: "TesteELSE"
                        }
                    }
                }).then(response => {
                    expect(response.status).to.equal(200)
                })
            }
        })
})

// Profile

Cypress.Commands.add('delUnfollowProfile', (token) => {
    cy.request({
            url: apiRoute.getFollowUnfollowProfile,
            method: 'DELETE',
            headers: { Authorization: token }
        })
})

Cypress.Commands.add('getFavoritePosts', (token) => {
    cy.request({
            url: apiRoute.getFavoritePosts,
            method: 'GET',
            headers: { Authorization: token }
        })
})

Cypress.Commands.add('getProfile', (token) => {
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

Cypress.Commands.add('postFollowProfile', (token) => {
    cy.request({
            url: apiRoute.getFollowUnfollowProfile,
            method: 'POST',
            headers: { Authorization: token }
        })
})

Cypress.Commands.add('putProfile', (token) => {
    cy.request({
            url: apiRoute.putProfile,
            method: 'PUT',
            body: {
                user: {
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUfVHdvudxIJcpsK9p2-D3x7D0hS76rGwmUwCiwH0dQ&s=10",
                    username: "",
                    bio: "The standard chunk of Lorem Ipsum used since 1966 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
                    email: "MasterPiece@qqq.com",
                    password: "Welcome12345"
                }
            },
            headers: { Authorization: token}
        }).then(response => {
            expect(response.status).to.equal(200)
        })
})

Cypress.Commands.add('postSignIn', () => {
    cy.request({
            url: apiRoute.postSignIn,
            method: 'POST',
            body: {
                user: {
                    email: "MasterPiece@qqq.com",
                    password: "Welcome12345"
                }
            }
        })
})

Cypress.Commands.add('postSignUp', () => {
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
        })
})

Cypress.Commands.add('getPopularTags', (token) => {
    cy.request({
            url: apiRoute.getPopularTags,
            method: 'GET',
            headers: { Authorization: token }
        })
})

Cypress.Commands.add('getTags', (token) => {
     cy.request({
            url: apiRoute.getTags,
            method: 'GET',
            headers: { Authorization: token }
        })
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })