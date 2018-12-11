/// <reference types="Cypress" />

import { DOWN_ARROW, ENTER, fillInputWithName, get, getInputByName, urlContains } from '../../common/helpers'


context('Como asesor', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:4567/fixtures/pristine')
    cy.visit('http://localhost:8080/solicitudes-list.html')
  })

  it('puedo mostrar una solicitude', () => {
    cy.get('.solicitude-show-button').first().click()
  })

})

