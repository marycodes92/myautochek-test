/**
 * This file contains the SellACar class
 * It returns all the methods used on the Buy a Car Page test and some other pages 
 * These methods are reusable
 */

class SellACar{
    
    clickSellACarPage(){
        cy.get(':nth-child(4) > a > span').click();
    }

    callToAction(){
        cy.get('.get-started > .text').click();
    }

    enterFirstName(name){
        cy.get('.form-row > :nth-child(1) > div > .input').type(name);
    }

    enterLastName(name){
        cy.get('.form-row > :nth-child(2) > div > .input').type(name);
    }

    enterEmail(email){
        cy.get('.input-container.mb-30 > div > .input').type(email);
    }

    enterCarType(car){
        cy.get(':nth-child(4) > div > .input').type(car);
    }

    submitForm(){
        cy.get('.primary-button').click();
    }

    // These methods are returns elements that are on the CTA (sell-a-car) page
    model(value){
        cy.get('.form-content > .input-container > .input-icon-container > .input').type(value);
    }

    nextButton(){
        cy.get('.about-your-car-container > .form-action > .primary-button').click();
    }

    selectCarModel(){
        cy.get('.results-items > :nth-child(5)').click();
    }

    // Slide 3 of the CTA Form
    yearOfVehicle(){
        cy.get('.about-your-car-container > .form-action').click();
        cy.get(':nth-child(2) > .input-icon-container > .input').click();
    }

    carBodyType(){
        cy.get(':nth-child(2) > .input-icon-container > .input').click();
        cy.get('.select-items > :nth-child(2)').click();
    }

    carMileage(value){
        cy.get(':nth-child(2) > .input-icon-container > .input').type(value);
    }

    selectGearType(){
        cy.get(':nth-child(4) > .item-selector > :nth-child(2)').click();
    }

    carFuelType(){
        cy.get(':nth-child(5) > .item-selector > :nth-child(3)').click();
    }

    carImportType(){
        cy.get(':nth-child(2) > .radio > .radio-label').click();
        cy.get(':nth-child(3) > .radio > .radio-label').click();
    }

    enterLocation(){
        cy.get('.css-1hwfws3');
        cy.get('#react-select-2-option-5').click();
    }

    // Book appointment page methods
    enterName(name){
        cy.get('form > :nth-child(1) > div > .input').type(name);
    }

    email(value){
        cy.get(':nth-child(3) > div > .input').type(value);
    }

    confirmButton(){
        cy.get('form > .primary-button').click();
    }

    // Location details modal methods
    addressLine(address){
        cy.get('form > :nth-child(1) > div > .input').type();
    }

    selectState(){
        cy.get(':nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click();
        cy.get('#react-select-4-option-2');
    }

    selectCity(){
        cy.get(':nth-child(3) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click();
        cy.get('#react-select-5-option-2');
    }

    pickADate(value){
        const datePicker = cy.get('.form-row > :nth-child(1) > div > .input').type(value);
        if(datePicker < currentDate){
            error.throw();
        } 
        return this; 
    }

    pickATime(){
        cy.get(':nth-child(2) > div > .input').type();
    }
}

module.exports = SellACar;