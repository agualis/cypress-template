/// <reference types="Cypress" />

import { DOWN_ARROW, ENTER, fillInputWithName, get, getInputByName, urlContains } from '../../common/helpers'

context('FOO', () => {
  beforeEach(() => {
    cy.visit('http://')
  })

  it('BAR', () => {
    cy.get(`input[name="${n}"]`)
  })

})

