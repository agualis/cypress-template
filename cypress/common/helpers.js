//CYPRESS KEYBOARD KEYS:
export const ENTER = '{enter}'
export const DOWN_ARROW = '{downarrow}'
export const BACKSPACE = '{backspace}'

export const OPTIONS = ()=> ({force: true})

export const click = (id) => get(id).click(OPTIONS())

export const clickFirst = (id) => get(id).first().click()

export const clickLast = (id) => get(id).last().click()

export const uncheck = (id) => get(id).uncheck()

export const get = (id) => cy.get(`[data-test=${id}]`)

export const getInputByName = (name) => cy.get(`input[name="${name}"]`)

export const getSelectByName = (name) => cy.get(`select[name="${name}"]`)

export const fillInputWithName = (name, value) => getInputByName(name).type(value)

export const fillInput = (name, value) => getInputByName(name).type(value)

export const selectByClass= (className, value) => {
    cy.get(className).click()
    cy.contains(value).click()
}

export const urlContains = (urlPart) => cy.url().should('contain', urlPart)

export const stubRequest = (url, alias) => {
  cy.server()
  cy.route(url, [{}]).as(alias)
}

