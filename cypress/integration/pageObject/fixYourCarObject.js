/**
 * This file contains the FixYourCar class
 * It returns all the methods used for the Fix Your Car Page 
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
        const firstName = cy.get('form > :nth-child(1) > div > .input');
        firstName.type(value);
        return this;
    }

    enterPhoneNumber(value){
        const phoneNumber = cy.get('.react-phone-input');
        phoneNumber.type(value);
        return this;
    }

    enterEmailAddress(value){
        const email = cy.get(':nth-child(3) > div > .input');
        if(value){
            email.clear();
        } 
        email.type(value);
        return this;
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
        cy.get(':nth-child(1) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3');
        cy.get('.mb-25 > :nth-child(2) > div > .input');
    }

    selectCity(){
        cy.get(':nth-child(2) > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3', { timeout: 10000 });
        cy.get('#react-select-4-option-2');
    }

    enterStreet(value){
        const street = cy.get('.mb-30 > div > .input');
        street.type();
        return this;
    }

    enterDate(value){
        const date = cy.get('.mb-25 > :nth-child(1) > div > .input'); 
        date.type(value);
        return this;
    }

    enterTime(value){
        const time = cy.get('.mb-25 > :nth-child(2) > div > .input'); 
        time.type(value);
        return this;
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