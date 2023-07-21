/// <reference types="cypress" />
describe('page', () => {
  it('crashes because unreachable', () => {
    cy.visit('https://lalallalalalalalalalalalal.com')
  })
})
