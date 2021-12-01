///<reference types = "cypress"/>

/**
 * This file contains the tests for the Fix Your Car Page
 * The describe block is like the suite that houses all the test cases
 * The before block runs once before all tests 
 * The it block is the individual test cases
 */


import SignInPage from '../pageObject/signInPageObject';

describe('Sign in Functionality', () => {
    const signIn = new SignInPage();

    before('should launch Autochek website', () => {
        signIn.launchWebsite();
        cy.get('.logo > img').should('exist');
        cy.contains('Featured Cars').scrollIntoView().should('exist');
        signIn.visitSignInPage();
    });

    it('should go to sign in page', () => {
        cy.contains('New to Autochek? Create an account').should('exist');
        cy.contains('Continue with Google').should('exist');
        cy.contains('Continue with Facebook').should('exist');
        cy.contains('Remember me').should('exist');
        cy.contains('Forgot Password').should('exist');
        cy.contains('Log In').should('exist');
    });

    it('should verify the forget password link', () => {
        cy.get('.primary-text').click();
        cy.url().should('include', '/register');
        cy.go('back');
        cy.contains('Forgot Password').click();
        cy.url().should('include', '/forgot-password');
        cy.go('back');
    });

    it('should sign in an unregistered user', () => {
        signIn.enterEmail('onuorahmary@gmail.com');
        signIn.enterPassword('12345678');
        signIn.rememberMe();
        signIn.submit();
        cy.get('#swal2-content').should('have.text','User not found. Please sign up');
        cy.get('.swal2-confirm').click();
        cy.go('back');
    })

    it('should sign in a registered user via google mail', ()=>{
        signIn.loginViaGoogle();
        
    })
})