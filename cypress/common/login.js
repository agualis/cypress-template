import { TEST_PASSWORD, TEST_USER } from './globals'
import { get, urlContains } from './helpers'


export const login = () => {
  enterUser(TEST_USER)
  enterPassword(TEST_PASSWORD)
  clickButton('button:first')
  urlContains('home')
}

export const programmaticLogin = (email, password) => {
  //cy.request??
  //setCookie??
  //Asynchronous??
  //return asyncLogin({ email, password })
}

const enterUser = (user) => {
  cy.get('#username').type(user)
}

const enterPassword = (password) => {
  cy.get('#password').type(password)
}

const clickButton = (buttonId) => {
  cy.get(buttonId).click()
}
