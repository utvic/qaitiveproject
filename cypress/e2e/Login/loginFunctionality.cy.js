/// <reference types="cypress"/>
import { loginElements } from "../../support/POM/LoginPage/loginPageElements";
import { generateRandomUsername,generateRandomEmail,generateRandomPassword } from "../../support/utils";
const baseUrl = Cypress.config('baseUrl');
const userCredentials = Cypress.env('userCredentials');

beforeEach('Login page', () =>{
  cy.visit(`${baseUrl}/login`);
})
describe('Login',()=>{
  it('Login with right credentials',()=>{
    cy.get(loginElements.email).type(userCredentials.email);
    cy.get(loginElements.password).type(userCredentials.password);
    cy.get(loginElements.signInButton).click();
    cy.url().should('eq',`${baseUrl}/login`);
  })
  it('Login with wrong email',()=>{
    cy.get(loginElements.email).type(generateRandomEmail());
    cy.get(loginElements.password).type(userCredentials.password);
    cy.get(loginElements.signInButton).click();
    cy.get(loginElements.errorMessage,{timeout:10000}).should('contain','email or password is invalid');
  })
  it('Login with wrong password',()=>{
    cy.get(loginElements.email).type(userCredentials.email);
    cy.get(loginElements.password).type(generateRandomPassword());
    cy.get(loginElements.signInButton).click();
    cy.get(loginElements.errorMessage,{timeout:10000}).should('contain','email or password is invalid');
  })
})

describe('Redirection',()=>{
  it('Test-1',()=>{
    cy.get('a[href="/register"]').contains('Need an account?').click();
    cy.url().should('eq',`${baseUrl}/register`);
  })
})