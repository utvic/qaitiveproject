/// <reference types="cypress"/>
const baseUrl = Cypress.config('baseUrl');
const userCredentials = Cypress.env('userCredentials');
beforeEach('Login page', () =>{
  cy.login(`${baseUrl}/login`,userCredentials.email, userCredentials.password);
})
describe('',()=>{
  it('Tags empty state',()=>{
    const tags ={
      "tags": [
      ]
    }
    cy.intercept('GET','https://api.realworld.io/api/tags',tags).as('getTags');
    
    
    cy.wait('@getTags');
    cy.get('.sidebar > :nth-child(4)').should('contain', 'No tags are here... yet.');
  })
  it('Articles empty state',()=>{
    const articles ={
      "articles": [
      ]
    }
    cy.intercept('GET','https://api.realworld.io/api/articles?limit=10&offset=0',articles).as('getArticles');
    
   
    cy.wait('@getArticles');
    cy.get('.article-preview').should('contain', 'No articles are here... yet.');
  })
})