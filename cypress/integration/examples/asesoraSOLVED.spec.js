/// <reference types="Cypress" />

import { DOWN_ARROW, ENTER, fillInputWithName, get, getInputByName, urlContains } from '../../common/helpers'

context('As an anonymous user', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('can create a request', () => {
    getInputByName('name').type('Kent')
    getInputByName('surname').type('Beck')
    // cy.get('#applicant-ccaa').click().contains('Aragón').click()
    cy.get('#applicant-ccaa > .search').type('Aragón').type(ENTER)
    getInputByName('phonenumber').type('666-666-666').should('have.value', '666666666')
    getInputByName('email').type('xavi@devscola.com')
    // fillInputWithName('email', 'manolito@devscola.com')
    cy.get('#date').type('2019-10-10')
    cy.get('#source > .search').type('Carta').type(ENTER)
    cy.get('#solicitude-text').type('WTF')
    cy.contains('Guardar solicitud').click()
    urlContains('solicitudes-list.html')
  })

})

