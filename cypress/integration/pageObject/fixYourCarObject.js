/**
 * This file contains the FixYourCar class
 * It returns all the methods used on the Fix Your Car test page and some other pages 
 */

class FixYourCar{

    visitFixYourCarPage(){
        cy.get('.nav-items > :nth-child(2) > a > span').click();
    }

    pickAService(){
        cy.scrollTo(0, 1700);
        cy.get(':nth-child(1) > .service-info').click();
    }

    enterFirstName(value){
        cy.get('form > :nth-child(1) > div > .input').type(value);
    }

    enterPhoneNumber(value){
        cy.get('.react-phone-input').type(value);
    }

    enterEmailAddress(value){
        cy.get(':nth-child(3) > div > .input').type(value);
    }

    selectYourCar(){
        cy.get('.css-1hwfws3').click();
        cy.get('#react-select-2-option-3').click();
    }

    // This methods returns the Users pick up location 
    pickUpLocation(){
        cy.get('.form-option-item.mb-15').click();
    }

    selectState(){
        cy.get(':nth-child(1) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click();
        cy.get('.mb-25 > :nth-child(2) > div > .input');
    }

    selectCity(){
        cy.get(':nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click();
        cy.get('#react-select-4-option-2');
    }

    enterStreet(value){
        cy.get('.mb-30 > div > .input').type(value);
    }

    enterDate(value){
        cy.get('.mb-25 > :nth-child(1) > div > .input').type(value); 
        
    }

    enterTime(value){
        cy.get('.mb-25 > :nth-child(2) > div > .input').type(value); 
    }

    // The methods below returns the Autochek drop location
    dropOffAddress(){
        cy.get('form > :nth-child(7)').click();
    }

    selectChoiceLocation(){
        cy.get(':nth-child(5) > .location-info > .select-location').click();
    }

    confirmAppointment(){
        cy.get('.primary-button').click();
    }
    
}

module.exports = FixYourCar;