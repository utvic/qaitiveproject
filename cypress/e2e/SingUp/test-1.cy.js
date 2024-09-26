/// <reference types="cypress"/>
import { singUpElements } from "../../support/POM/SingUp/singUpElements";
import { generateRandomUsername,generateRandomEmail,generateRandomPassword } from "../../support/utils";

const baseUrl = Cypress.config('baseUrl');
const userCredentials = Cypress.env('userCredentials');
beforeEach('SignUp page', () =>{
  cy.visit(`${baseUrl}/register`);
})
describe('Sign in funcionality', ()=>{
  it('Sign in with valid data',()=>{
    cy.get(singUpElements.singUpUsername).type(generateRandomUsername());
    cy.get(singUpElements.singUpEmail).type(generateRandomEmail());
    cy.get(singUpElements.singUpPassword).type(generateRandomPassword());
    cy.get(singUpElements.signUpButton).click();
    cy.url().should('eq',`${baseUrl}/`);
  })
  it('Sign in with existing username',()=>{
    cy.get(singUpElements.singUpUsername).type(userCredentials.username);
    cy.get(singUpElements.singUpEmail).type(generateRandomEmail());
    cy.get(singUpElements.singUpPassword).type(generateRandomPassword());
    cy.get(singUpElements.signUpButton).click();
    cy.get(singUpElements.signUpErrorMessage,{timeout:10000}).should('contain','username has already been taken');
  })
  it('Sign in with existing email',()=>{
    cy.get(singUpElements.singUpUsername).type(generateRandomUsername());
    cy.get(singUpElements.singUpEmail).type(userCredentials.email);
    cy.get(singUpElements.singUpPassword).type(generateRandomPassword());
    cy.get(singUpElements.signUpButton).click();
    cy.get(singUpElements.signUpErrorMessage,{timeout:10000}).should('contain','email has already been taken');
  })
})
describe('Have an account redirection',()=>{
  it('Test-1',()=>{
    cy.get('a[href="/login"]').contains('Have an account?').click();
    cy.url().should('eq',`${baseUrl}/login`);
  })
})

