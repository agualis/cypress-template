/// <reference types="Cypress" />

import { urlContains } from '../../common/helpers'
import { login } from '../../common/login'

const WINDOW_OPEN_ALIAS = 'windowOpen'
const WINDOW_OPEN = '@windowOpen'
context('When clicking Asesora login button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/login.html', {
      onBeforeLoad(win) {
        cy.stub(win, 'open').as(WINDOW_OPEN_ALIAS)
      }
    })
  })

  it('a new window is opened', () => {
    urlContains('login')
    cy.get('.abcRioButtonContentWrapper').click()
    assertWindowOpened()
  })

  const assertWindowOpened = ()=> cy.get(WINDOW_OPEN).should('be.called')
})

