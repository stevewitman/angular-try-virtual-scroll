import { createYield } from "typescript";

describe('Virtual Scrolling', function () {
  it('Should include visible in DOM', function () {
    cy.visit('localhost:4200')
    cy.get('#virtual-scroll').should('contain', '2')
    cy.get('#virtual-scroll').should('not.contain', '8')
    cy.get('#virtual-scroll').scrollTo(0, 1000)
    cy.get('#virtual-scroll').should('contain', '8')
    cy.get('#virtual-scroll').should('not.contain', '2')
  })
})
