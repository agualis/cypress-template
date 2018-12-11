/// <reference types="Cypress" />

import { DOWN_ARROW, ENTER, fillInputWithName, get, getInputByName, urlContains } from '../../common/helpers'

let llenarMinimos = function () {
  getInputByName('phonenumber').type('666 -66666-6')
  cy.get('#solicitude-text').type('Falta de higiene')
  cy.contains('Guardar solicitud').click()
}
context('Como asesor', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('quiero dar de alta una solicitud', () => {
    llenarMinimos()
    cy.contains('Todo Ok')
    urlContains('solicitudes-list')
  })

})

