/**
 * This file contains the tests for the Sell A Your Page
 * The describe block is like the suite that houses all the test cases
 * The before block runs once before all tests 
 * The it block is the individual test cases
 */

const { it } = require("mocha");
import SellACar from '../pageObject/sellACarPageObject';
import LandingPage from '../pageObject/landingPageObject';
import FixYourCar from '../pageObject/fixYourCarObject';

describe('Buy A Car Module', ()=>{
    const landing = new LandingPage();
    const sell = new SellACar();
    const phone = new FixYourCar();

    before('should launch Autochek website', () => {
        landing.launchWebsite();
        // cy.get('.logo > img').should('exist');
        // cy.contains('Featured Cars').scrollIntoView().should('exist');
        sell.clickSellACarPage();
    });

    it('should check that all necessary elements exists on the sell a car page', ()=>{
        cy.get('div.title > .title').should('have.text', 'Selling your car has never been this facile');
        cy.get('.hero-options').should('exist');
        cy.get('.great-value-container > .container > .section-title').should('exist');
        cy.get('.content > .section-title').should('exist');
        cy.get('.inspection-form').should('exist');
        cy.get('.inspection-form > .section-title').should('exist');
        cy.get('.inspection-form > .section-title').should('exist');
        cy.get('.faq-container > :nth-child(1) > .section-title').should('exist');
        cy.get('.shop-catalogue-container > .container > .section-title').should('exist');
    });

    it('should fill the pre-sale vehicle inspection form', ()=>{
        sell.enterFirstName('Mary');
        sell.enterLastName('Onurah');
        phone.enterPhoneNumber('7069774071');
        sell.enterEmail('onuorahmary@gmail.com');
        sell.enterCarType('toyota');
        cy.get('.primary-button').should('be.enabled');
        sell.submitForm();
        cy.get('.image > img').should('exist');
        cy.get('.form-action').should('exist'); 
        cy.get('.primary-button').should('exist');
        cy.get('.logo > img').click();
    });

    it.only('should take user to the call-to-action page', ()=>{
        cy.get('.get-started > .text').click();
        cy.get('.autochek-marketplace-sidebar > .logo > img').should('exist');
        cy.get('.autochek-marketplace-sidebar > .title > span').should('exist');
        cy.get('.autochek-marketplace-sidebar > .description').should('exist');
        cy.get('.form-title').should('have.text', 'Tell us about your car');
        cy.get('.car-search-results > .title').should('have.text', 'Popular car makers');
        cy.get('.form-header > .close > svg > path').should('exist');
        cy.get('.about-your-car-container > .form-action').should('not.be.enabled');
        cy.get('.progress-bar').should('exist');

        //Car detials form
        sell.model('toyota');
        cy.get('.car-image > img').should('exist');
        cy.get('.car-image').click();
        cy.get('.about-your-car-container > .form-action').should('not.be.disabled');
        
        sell.nextButton();
        cy.get('.results-items > :nth-child(6)').should('exist');
        cy.get('.about-your-car-container > .form-action').should('not.be.enabled');

        sell.selectCarModel();
        cy.get('.about-your-car-container > .form-action > .primary-button').should('not.be.disabled');

        sell.nextButton();

        // Other details about your vehicle
        cy.get('.about-your-car-container > .form-action').should('not.be.enabled');
        sell.yearOfVehicle();
        sell.carBodyType();
        sell.carMileage(300);
        sell.selectGearType();
        sell.carFuelType();
        sell.carImportType();
        sell.enterLocation();
        cy.get('.about-your-car-container > .form-action > .primary-button').should('not.be.disabled');
        sell.nextButton();

        // 
        cy.get('.strong').should('have.text', 'Autochek Marketplace');
        cy.get('.autochek-evaluation-container > .page-section-container > .page-section-header > .title').should('have.text', 'AUTOCHEK EVALUATION');
        cy.get('.message > .text').should('have.text', 'Estimated price range of vehicle');
        cy.get('.vehicle-details-header > .title').should('have.text', 'Your vehicle details');
        // cy.get('.plain-button').click(); going back one step
        cy.get('.edit > .text').should('exist');
        cy.get('.book-appointment-container > .page-section-container > .page-section-header > .title').should('exist');
    });

    it('should edit the car details', ()=>{
        cy.get('.edit > .text').click();
    });

    it('should book apointment for inspection with inspect at my location', ()=>{
        cy.get('.primary-button').click();
        sell.enterName();
        phone.enterPhoneNumber();
        cy.get('.mb-15').click();
        cy.get('.mb-15 > .radio-container > .radio > .radio-display').should('be.checked');
        cy.get('form > .primary-button').should('be.enabled');
        sell.confirmButton(); 

        // Location details modal test
        cy.get('form > .primary-button').should('have.text', 'Location details');
        cy.get('.service-cost > .text').should('exist');
        sell.addressLine();
        sell.selectState();
        sell.selectCity();
        sell.pickADate('01/12/2021');
        sell.pickATime();
    });

    it('should book apointment for inspection with inspect at Autochek center', ()=>{
        cy.get('.primary-button').click();
        sell.enterName();
        phone.enterPhoneNumber();
        cy.get('.mb-30').click();
        cy.get('.mb-30 > .radio-container > .radio > .radio-display').should('be.checked');
        cy.get('form > .primary-button').should('be.enabled');
        sell.confirmButton();
       
        cy.get('form > .primary-button').should('have.text', '');
        cy.get('.service-cost > .text').should('exist');
    });
})