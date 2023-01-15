///<reference types="Cypress"/>

//const { data } = require("cypress/types/jquery");

// describe('my first test suite',()=>{
//   it ('Check data',()=>{
//     cy.fixture('example').then((data)=>{
//         cy.log('Data is:', data)        
//     })
//   })
//   it ('checks email address',()=>{
//     cy.fixture('example').then((data)=>{
//       if (expect(data.email).to.equal('hello@cypress.io'))
//          cy.log('email address validated successfully')
//     })
//   })
//   it ('checks body of the json',()=>{
//     cy.fixture('example').then((data)=>{
//         expect(data.body).to.equal('Fixtures are a great way to mock data for responses to routes')
//     })
//   })



// });
describe('Create an account', () => {
  it('Visits the website and creates an account', () => {
    cy.visit('https://www.etsy.com')
    cy.get('nav > .wt-display-flex-xs > :nth-child(1)').click()
    cy.get('[data-heading-section=""] > .wt-display-flex-xs').find('button[type="button"]').click()
    cy.get('#join_neu_email_field').type('test1@example.com')
    cy.get('#join_neu_first_name_field').type('Syed Test Danyal')
    cy.get('#join_neu_password_field').type('Ovrlod1@')
    cy.get('.wt-validation').find('button[value="register"]').click()
   }) 
})

describe('Required fields', () => {
  it('Ensures required fields are filled out', () => {
    cy.visit('https://www.etsy.com')
    cy.get('nav > .wt-display-flex-xs > :nth-child(1)').click()
    cy.get('[data-heading-section=""] > .wt-display-flex-xs').find('button[type="button"]').click()
  })
})

describe('Data-driven login', () => {
  const users = [
    {email: 'user1@example.com', password: 'Ovrlod2@'},
    {email: 'user2@example.com', password: 'Ovrlod3@'},
    {email: 'user3@example.com', password: 'Ovrlod4@'}
  ]

  users.forEach((user) => {
    it(`Logs in as ${user.email}`, () => {
      cy.visit('https://www.etsy.com')
      cy.get('nav > .wt-display-flex-xs > :nth-child(1)').click()
      cy.get('#join_neu_email_field').type(user.email)
      cy.get('#join_neu_password_field').type(user.password)
      cy.get('[data-heading-section=""] > .wt-display-flex-xs').find('button[type="button"]').click()
       
    })
  })
})

describe('Etsy Japan Search', () => {
  beforeEach(() => {
    cy.visit('https://www.etsy.com/jp/');
  });

  it('should display search results for handmade, vintage, custom, and unique gifts', () => {
    const searchTerm = 'handmade vintage custom unique gifts';
    cy.get('#global-enhancements-search-query')
      .type(searchTerm)
      .type('{enter}');
    cy.get('.btn.btn-primary')
      .click();
    cy.get('.responsive-listing-grid.wt-grid.wt-grid--block.justify-content-flex-start.pl-xs-0')
      .should('be.visible')
      .and('contain', searchTerm);
  });
});