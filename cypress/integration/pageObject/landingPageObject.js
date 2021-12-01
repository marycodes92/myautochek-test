/**
 * This file contains the LandingPage class
 * It returns all the methods used on the landing page test and some other pages 
 * These methods are reusable
 */


class LandingPage{
    
    launchWebsite(){
        cy.viewport(1280, 720);
        cy.visit('/');
    }
    

}

module.exports = LandingPage;