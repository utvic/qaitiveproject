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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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

import { loginElements } from "./POM/LoginPage/loginPageElements";
import { createArticleElements } from "./POM/Article/CreateArticlePage/createArticleElements";

Cypress.Commands.add('login',(url,email,password)=>{
  cy.visit(url);
  cy.get(loginElements.email).type(email);
  cy.get(loginElements.password).type(password);
  cy.get(loginElements.signInButton).click();
})
Cypress.Commands.add('createArticle',(title,about,txtDescription,tags)=>{
  cy.get(createArticleElements.articleTitle).type(title);
    cy.get(createArticleElements.articleAbout).type(about);
    cy.get(createArticleElements.articleText).type(txtDescription);
    cy.get(createArticleElements.articleTags).type(tags);
    cy.get(createArticleElements.publishButton).click();
})

Cypress.Commands.add('loginAPI', (url) => {
  const userCredential = {
    "user": {
      "email": "jela@jela.com",
      "password": "111111"
    }
  };

  return cy.request('POST', 'https://api.realworld.io/api/users/login', userCredential)
    .its('body')
    .then(body => {
      const token = body.user.token;
      console.log(token);
      cy.visit(url, {
        onBeforeLoad(win) {
          win.localStorage.setItem('jwtToken', token); 
        }
      });
      return cy.wrap(token); 
    });
});

Cypress.Commands.add('createArticle', (token, articleData) => {
  return cy.request({
    method: 'POST',
    url: 'https://api.realworld.io/api/articles/',
    headers: {
      'Authorization': 'Token ' + token,
      'Content-Type': 'application/json'
    },
    body: { article: articleData }
  }).its('body.article.slug'); 
});

Cypress.Commands.add('updateArticle', (token, slug, putObject) => {
  return cy.request({
    method: 'PUT',
    url: `https://api.realworld.io/api/articles/${slug}`,
    headers: { 'Authorization': 'Token ' + token },
    body: putObject
  }).its('body.article.slug'); 
});

Cypress.Commands.add('deleteArticle', (token, slug) => {
  return cy.request({
    method: 'DELETE',
    url: `https://api.realworld.io/api/articles/${slug}`,
    headers: { 'Authorization': 'Token ' + token }
  });
});


