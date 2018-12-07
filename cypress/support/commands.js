import { TEST_PASSWORD, TEST_USER } from '../common/globals'
import { programmaticLogin } from '../common/login'

Cypress.Commands.add('login', async () => {
  await programmaticLogin(TEST_USER, TEST_PASSWORD)
})

Cypress.Commands.add('loginWithAdminUser', async () => {
  await programmaticLogin(TEST_USER, TEST_PASSWORD)
})
