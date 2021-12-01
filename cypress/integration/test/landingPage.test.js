/**
 * This file contains the tests for the landing/Home Page
 * The describe block is like the suite that houses all the test cases
 * The before block runs once before all tests 
 * The it block is the individual test cases
 */

import LandingPage from '../pageObject/landingPageObject';
import SignInPage from '../pageObject/signInPageObject';

describe('Landing Page Elements',()=>{
    const signIn = new SignInPage();
    const landing = new LandingPage();

    before('should launch Autochek website', () => {
        landing.launchWebsite();
        cy.get('.logo > img').should('exist');
        cy.contains('Featured Cars').scrollIntoView().should('exist');
    });

    it('should check that all necessary elements exists on the landing page', ()=>{
        cy.get('.nav-items > :nth-child(2) > a > span').should('have.text', 'Fix Your Car');
        cy.get(':nth-child(3) > a > span').should('have.text', 'Buy A Car');
        cy.get(':nth-child(4) > a > span').should('have.text', 'Sell A Car');
        cy.get(':nth-child(5) > a > span').should('have.text', 'Buy A Truck');
        cy.get(':nth-child(6) > a > span').should('have.text', 'Car Loan');
        cy.get(':nth-child(7) > a > span').should('have.text', 'Brand New');
        cy.get('.mr-20').should('have.text', 'Sign In');
        cy.get('[href="/en/ng/auth/register"]').should('have.text', 'Register');
        cy.get('.buy-car').should('exist');
        cy.get('.sell-car').should('exist');
        cy.get('.fix-car').should('exist');
        cy.get('.new-container > .title').should('exist');
        cy.get(':nth-child(1) > .container > .content > .title').should('exist');
        cy.get('.map > svg').should('exist');        
        cy.get('a.jsx-1973554978 > .jsx-1973554978').should('exist');
    });

    it('should verify the links and buttons on the landing page work as should', ()=>{
        cy.get('.sell-car > .section-content > .button-group > .primary-button').click();
        cy.go('back');

        cy.get('.button-group > [href="/en/ng/cars-for-sale"]').click();
        cy.go('back');

        cy.get('.button-group > [href="/en/ng/get-prequalified"]').click();
        cy.go('back');

        cy.get('.fix-car > .section-content > .button-group > .primary-button').click();
        cy.go('back');

        cy.get('.action > .primary-button').click();
        cy.go('back');
        
        cy.get(':nth-child(1) > .reactSelectPrefix__control > .reactSelectPrefix__value-container').type('Toyota');
        cy.get(':nth-child(2) > .reactSelectPrefix__control > .reactSelectPrefix__value-container').type('Camry');
        cy.get('.search-cars-form > .button').click();
    });
});