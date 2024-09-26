/// <reference types="cypress"/>
import { createArticleElements } from "../../../support/POM/Article/CreateArticlePage/createArticleElements";
import { generateRandomString } from "../../../support/utils";
const baseUrl = Cypress.config('baseUrl');
const userCredentials = Cypress.env('userCredentials');

beforeEach('Login page', () =>{
  cy.login(`${baseUrl}/login`,userCredentials.email, userCredentials.password);
})
describe('Create article',()=>{
  it('Test-1',()=>{
    const title  = generateRandomString(10);
    const about  = generateRandomString(10);
    const txtDescription = generateRandomString(10);
    const tags =generateRandomString(5); 

    cy.contains('New Article').click();
    // cy.get(createArticleElements.articleTitle).type(title);
    // cy.get(createArticleElements.articleAbout).type(about);
    // cy.get(createArticleElements.articleText).type(txtDescription);
    // cy.get(createArticleElements.articleTags).type(tags);
    // cy.get(createArticleElements.publishButton).click();
    cy.createArticle(title,about,txtDescription,tags);

    cy.contains('h1',title);
    cy.get('a.author')
      .should('contain.text', userCredentials.email);
    cy.contains('div',txtDescription);
    cy.contains('li',tags);
  })
})
describe('Delete article',()=>{
  it('Test-1',()=>{
    const title  = generateRandomString(10);
    const about  = generateRandomString(10);
    const txtDescription = generateRandomString(10);
    const tags = generateRandomString(5); 

    cy.contains('New Article').click();
    cy.createArticle(title,about,txtDescription,tags);
    cy.contains('Delete Article').click();

  })
})
describe('Edit article',()=>{
  it.only('Test-1',()=>{
    const title  = generateRandomString(10);
    const about  = generateRandomString(10);
    const txtDescription = generateRandomString(10);
    const tags =generateRandomString(5); 

    cy.contains('New Article').click();
    cy.createArticle(title,about,txtDescription,tags);
    
    cy.get('.article-actions > app-article-meta > .article-meta > :nth-child(3) > .btn-outline-secondary').click();
    cy.wait(3000)
    cy.get(createArticleElements.articleTitle).clear();
    cy.wait(3000)
    cy.get(createArticleElements.articleAbout).clear();
    cy.wait(3000)
    cy.get(createArticleElements.articleText).clear();
    cy.wait(3000)
    cy.get(createArticleElements.articleTags).clear();
    cy.wait(3000)

    const title1  = generateRandomString(10);
    const about1  = generateRandomString(10);
    const txtDescription1 = generateRandomString(10);
    const tags1 = generateRandomString(5); 
    cy.createArticle(title1,about1,txtDescription1,tags1);

  })
})