///<reference types="cypress"/>

/**
 * This file contains the SignInPage class
 * It returns all the methods used for the Sign in Page 
 * These methods are reusable
 */

class SignInPage{
    launchWebsite(){
        cy.viewport(1280, 720);
        cy.visit('/');
    }

    visitSignInPage(){
        cy.contains('Sign In').click();
    }

    enterEmail(email){
        const emailField = cy.get('.form-content > :nth-child(1) > div > .input');
        // emailField.clear();
        emailField.type(email);
        return this;
    }

    enterPassword(password){
        const passwordField = cy.get(':nth-child(2) > div > .input');
        // passwordField.clear();
        passwordField.type(password);
        return this;
    }

    rememberMe(){
        cy.get('.checkbox-label').click();
    }

    submit(){
        cy.get('.button').click();
    }

    loginViaGoogle(){
        cy.get('.social-buttons > :nth-child(2)').click();
    }

    loginViaFacebook(){
        cy.get('#sl20349 > .social-button').click();
    }

}

module.exports = SignInPage;