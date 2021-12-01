///<reference types="cypress"/>

/**
 * This file contains the SignInPage class
 * It returns all the methods used on the Sign in test page and some other pages 
 * These methods are reusable
 */

class SignInPage{

    visitSignInPage(){
        cy.contains('Sign In').click();
    }

    enterEmail(email){
        cy.get('.form-content > :nth-child(1) > div > .input').type(email);
    }

    enterPassword(password){
        cy.get(':nth-child(2) > div > .input').type(password);
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