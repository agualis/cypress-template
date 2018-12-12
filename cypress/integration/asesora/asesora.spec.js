/// <reference types="Cypress" />

import { getInputByName, urlContains } from '../../common/helpers'

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

function llenarMinimos() {
  getInputByName('phonenumber').type('666 -66666-6')
  cy.get('#solicitude-text').type('Falta de higiene')
  cy.contains('Guardar solicitud').click()
}

