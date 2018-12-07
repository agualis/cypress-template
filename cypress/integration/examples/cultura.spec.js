/// <reference types="Cypress" />

import { fillInput, getInputByName, getSelectByName, urlContains } from '../../common/helpers'

context('As an admin user in home I can', () => {
  beforeEach(() => {
    cy.loginWithAdminUser()
  })

  it('create an exhibition', () => {
    cy.visit('/home')
    // cy.get('input[name="show"]').click()
    getInputByName('show').click()
    getInputByName('name').type('WTF')
    getSelectByName('museums').select('some updated name')
    // getSelectByName('museums').select('4a492625316fb5f5d3e397ea0bf45e76')
    getSelectByName('type').select('Paint')
    getInputByName('dateStart').type('2019-10-10')
    getInputByName('name-es').type('La Cova de Benimaclet')
    fillInput('name-es', 'La Cova de Benimaclet')
    // cy.get('form').submit()
    cy.contains('Save').click()
    urlContains('exhibition')
  })

})

