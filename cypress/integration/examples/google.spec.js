/// <reference types="Cypress" />

import { urlContains } from '../../common/helpers'

const search = (searchTerm) =>  cy.get('.gLFyf').type(searchTerm).type('{enter}')
const openFirst = () =>  cy.get('.bkWMgd').first().get('h3').first().click()
const assertSearchOpened = ()=> urlContains('www.devscola.org')

context('When using Google search', () => {
  beforeEach(() => {
    cy.visit('https://www.google.es')
  })

  it('user can find and open devscola content', () => {
    search('devscola')
    openFirst()
    assertSearchOpened()
  })

})
