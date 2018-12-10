//CYPRESS KEYBOARD KEYS:
export const ENTER = '{enter}'
export const DOWN_ARROW = '{downarrow}'
export const BACKSPACE = '{backspace}'

export const click = (id) => get(id).click(OPTIONS())

export const get = (id) => cy.get(`[data-test=${id}]`)

export const urlContains = (urlPart) => cy.url().should('contain', urlPart)


