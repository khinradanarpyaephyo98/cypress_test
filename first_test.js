/// <reference types="cypress"/>

describe('Appointment cypress', () => {

    it('visit and login page',() => {
        cy.visit('https://pickatime.com/client?ven=11606505')
        cy.get('[width="250"] > input',{timeout:100000}).type('itgirliskpkp1@gmail.com')
        cy.get(':nth-child(4) > input',{timeout:100000}).type('Password22@')
        cy.get('.loginBtn > .submitBtn').click()  
        
        //Make appointment//
        cy.get(':nth-child(3) > :nth-child(1) > a',{timeout:100000}).click()
        cy.get('.TextMessageBoxDivSmall > :nth-child(2) > select',{timeout:100000}).select('2501640').should('have.value','2501640')
         
        //Date Choice//
        cy.get(':nth-child(5) > .usedDate > .ui-state-default',{timeout:100000}).click()
        
        if(cy.get('#textViewTable_0 > tbody > tr > td > a')){
            cy.get('#textViewTable_0 > tbody > tr > td > a').click()
            cy.get('[type="checkbox"]').check({ force: true }).should('be.checked')
            
            //create appointment//
            cy.get('[type="submit"]').click()
        }
        else{
            cy.get(':nth-child(3) > :nth-child(5) > .ui-state-default').click()
            cy.get('#textViewTable_0 > tbody > tr > td > a').click()
            cy.get('[type="checkbox"]').check({ force: true }).should('be.checked')
           
            //create appointment//
            cy.get('[type="submit"]',{timeout:100000}).click()
        }
        //show appointments //
        cy.get('[href="/client?printsched=on&ven=11606505"]').click()
        cy.get('[type="button"]').click()
        
    })

});

 



