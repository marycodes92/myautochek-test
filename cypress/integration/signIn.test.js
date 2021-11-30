/// <reference types="cypress"/>

describe('Sign in Functionality', () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
        cy.visit('https://marketplace.staging.myautochek.com/ng?delay=5000');
        cy.get('.logo > img').should('exist')
    })

    it('should click the sign-in button and verify content', () => {
        cy.contains('Sign In').click();
        cy.contains('New to Autochek? Create an account').should('exist');
        cy.contains('Continue with Google').should('exist');
        cy.contains('Continue with Facebook').should('exist');
        cy.contains('Remember me').should('exist');
        cy.contains('Forgot Password').should('exist');
        cy.contains('Log In').should('exist');
    })

    it('should verify the forget password link', () => {
        cy.contains('Create an account').click();
        cy.url().should('include', '/register');
        cy.go('back');
        cy.contains('Forgot Password').click();
        cy.url().should('include', '/forgot-password');
        cy.go('back');
    })

    it('should sign user in', () => {
        cy.contains('Sign In').click();
        cy.get('.form-content > :nth-child(1) > div > .input').type(
            'onuorahmary@gmail.com',
        );
        cy.get(':nth-child(2) > div > .input').type('12345678');
        cy.get('.checkbox-display').click();
        cy.get('.button').click();
        cy.get('#swal2-content').should(
            'have.text',
            'User not found. Please sign up',
        );
    })
})

// it('should test the cypress GUI', ()=>{
//     cy.visit('https://marketplace.staging.myautochek.com/en/ng');
// })