//CYPRESS KEYBOARD KEYS:
export const ENTER = '{enter}'
export const DOWN_ARROW = '{downarrow}'
export const BACKSPACE = '{backspace}'

// We need to create a new OPTIONS object
// because Cypress appears to modify it in each execution
export const OPTIONS = ()=> ({force: true})

export const click = (id) => get(id).click(OPTIONS())
export const clickWhenEnabled = (id) => get(id).click({force: false})

export const clickFirst = (id) => get(id).first().click()

export const clickLast = (id) => get(id).last().click()

export const uncheck = (id) => get(id).uncheck()

export const singleSelect = (id, optionName) => get(id).select(optionName)

export const write = (id, text) => get(id).clear(OPTIONS()).type(text, OPTIONS())

export const get = (id) => cy.get(`[data-test=${id}]`)

export const getInputByName = (name) => cy.get(`input[name="${name}"]`)

export const getSelectByName = (name) => cy.get(`select[name="${name}"]`)

export const fillInput = (name, value) => getInputByName(name).type(value)

export const getSlow = (id) => cy.get(`[data-test=${id}]`, { timeout: 10000 })

export const getFirst = (id) => get(id).first()

export const assertValue = (id, value) => get(id).should('have.value', value)

export const assertVisible = (id) => get(id).should('be.visible')

export const assertNotVisible = (id) => get(id).should('not.be.visible')

export const assertHasClass = (id, className) => get(id).should('have.class', className)

export const assertNotHasClass = (id, className) => get(id).should('not.have.class', className)

export const assertAtLeastOne = (id) => get(id).should((items)=> expect(items.size()).to.be.above(0))

export const assertAtLeastOneWithClass = (className) => cy.get(className).should((items)=> expect(items.size()).to.be.above(0))

export const assertOccurrences = (id, occurrenceNumber) => get(id).should((items)=> expect(items.size()).to.eql(occurrenceNumber))

export const loginAndGoToHome = ()=> {
  cy.login()
  cy.visit('/')
}

export const urlContains = (urlPart) => cy.url().should('contain', urlPart)

export const stubRequest = (url, alias) => {
  cy.server()
  cy.route(url, [{}]).as(alias)
}

export const getRandomFloat = () => {
  const max = 2000
  const min = 1000
  //Force decimals to be .25 to avoid problems wit trailing zeroes
  return (Math.floor(Math.random() * (max - min) + min) + 0.25).toFixed(2)
}

export const waitForGet = (command) => {
  cy.server()
  cy.route('GET', 'www.google.es' + '/async').as('get')
  command()
  cy.wait('@get')
}

