/**
 * This file contains the tests for the Buy A Your Page
 * The describe block is like the suite that houses all the test cases
 * The before block runs once before all tests 
 * The it block is the individual test cases
 */

const { it } = require("mocha");

describe('', ()=>{
    before('should launch Autochek website', () => {
        signIn.launchWebsite();
        cy.get('.logo > img').should('exist');
        cy.contains('Featured Cars').scrollIntoView().should('exist');
        signIn.clickBuyCarPage();
    });

    it('', ()=>{
        
    })
})