/// <reference types="Cypress" />

import { urlContains } from '../../common/helpers'

context('Como asesor', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:4567/fixtures/pristine')
    cy.visit('http://localhost:8080/solicitudes-list.html')
  })

  it('puedo mostrar una solicitude', () => {
    openFirstSolicitude()
    urlContains('show-solicitude.html')
    cy.get('#text').contains('La primera solicitud')
  })

  function openFirstSolicitude() {
    cy.get('.solicitude-show-button').first().click()
  }
})

