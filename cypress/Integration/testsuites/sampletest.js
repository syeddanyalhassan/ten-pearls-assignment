///<reference types="Cypress"/>

//const { data } = require("cypress/types/jquery");

describe('my first test suite',()=>{
  it ('Check data',()=>{
    cy.fixture('example').then((data)=>{
        cy.log('Data is:', data)        
    })
  })
  it ('checks email address',()=>{
    cy.fixture('example').then((data)=>{
      if (expect(data.email).to.equal('hello@cypress.io'))
         cy.log('email address validated successfully')
    })
  })
  it ('checks body of the json',()=>{
    cy.fixture('example').then((data)=>{
        expect(data.body).to.equal('Fixtures are a great way to mock data for responses to routes')
    })
  })



});