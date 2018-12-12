## Plantilla con ejemplos para el curso de test funcional en la cova

### Instalación

`npm install`


## Lanzar los tests en modo consola

`npm run e2e`

## Lanzar los tests en modo CI (headless con electron)

`npm run e2e`

## Lanzar un fichero de test en concreto

`./node_modules/.bin/cypress run --spec 'cypress/integration/asesora/asesora.spec.js'`

## Lanzar tets con un patrón

`./node_modules/.bin/cypress run --spec 'cypress/integration/asesora/*.spec.js'`

