/**
 * This file contains the tests for the Fix Your Car Page
 * The describe block is like the suite that houses all the test cases
 * The before block runs once before all tests 
 * The it block is the individual test cases
 */

import FixYourCar from '../pageObject/fixYourCarObject';
import LandingPage from '../pageObject/landingPageObject';


describe('Fix Your Car Module', ()=>{
    const landing = new LandingPage();
    const fixUrCar = new FixYourCar();

    before('Launch the Autochek website', ()=>{
        landing.launchWebsite();
        fixUrCar.visitFixYourCarPage();
    });

    it('should take user to the Fix your car page', ()=>{
        cy.url().should('include', '/fix-your-car');
        cy.contains('Car Repair & Maintenance Services | Professional Car Servicing').should('exist');
        cy.get('.section-title').should('include.text', 'Our Services in Nigeria', 'How it works', 'Why fix with Autochek');
    });

    describe('Individual Service Module', ()=>{
        before('', ()=>{
            fixUrCar.pickAService();
        });
    
        it('should select a service', ()=>{ 
            cy.get('.form-title').should('exist');
            cy.contains('Scheduled car services').should('exist');
            cy.contains('Our process:').should('exist');
            cy.contains('Our assurance').should('exist');
        });
    
        it('should fill the appointment form with pickup from my location option', ()=>{
            fixUrCar.enterFirstName('Mary');
            fixUrCar.enterPhoneNumber('7069774071');
            fixUrCar.enterEmailAddress('onuorahmary@gmail.com');
            fixUrCar.selectYourCar();
            fixUrCar.pickUpLocation();
            cy.get('.modal-header').should('exist');
            fixUrCar.selectState();
            fixUrCar.selectCity();
            fixUrCar.enterStreet();
            fixUrCar.enterDate();
            fixUrCar.enterTime();
            fixUrCar.confirm();
        });
    
        it('should fill the appointment form with drop off at Autochek location', ()=>{
            fixUrCar.enterFirstName('Oluchi');
            fixUrCar.enterPhoneNumber('7069774071');
            fixUrCar.enterEmailAddress('onuorahmary@gmail.com');
            fixUrCar.selectYourCar();
            fixUrCar.dropOffAddress();
            cy.get('.modal-content').should('exist');
            fixUrCar.selectChoiceLocation();
            cy.get('.location-actions > :nth-child(1) > .text').should('exist');
            cy.get(':nth-child(2) > .text').should('exist');
        });
    
        it('should submit appointment form', ()=>{
            fixUrCar.confirmAppointment();
        });
    });
});

