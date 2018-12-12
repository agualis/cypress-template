/// <reference types="Cypress" />

import { BACKSPACE, getInputByName } from '../../common/helpers'
import { login } from '../../common/login'

context('When login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:7654')
  })

  it('can login', () => {
    login()
  })

  it('can create ', () => {
    login() //<---ANTI-PATTERN
    cy.get('[name="name"]').type('Antonio')
    getInputByName('name').type(BACKSPACE+BACKSPACE)
  })
})

