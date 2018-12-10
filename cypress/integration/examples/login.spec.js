/// <reference types="Cypress" />

import { TEST_PASSWORD, TEST_USER } from '../../common/globals'
import { login } from '../../common/login'

context('When login in Cultura Accesible', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4567')
  })

  it('can login', () => {
    login()
  })

  it('can programmatically login', () => {
    //cy.request('POST', '/api/login', { username: TEST_USER, password: TEST_PASSWORD })
    cy.visit('/home')
  })

})

