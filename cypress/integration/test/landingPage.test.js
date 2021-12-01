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
        
    })
})