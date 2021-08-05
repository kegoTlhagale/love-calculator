const path = require('path')
const swaggerJSDoc = require('swagger-jsdoc')
const { API } = require('../globals')

const host = `localhost:${API.PORT}`


const swDef = {
  info: {
    title: 'Love Calculator',
    version: '1.0.0',
    description: 'A calculator that calculates the love between two people using their names',
  },
  host,
  basePath: '/love-calculator',
  schemes: ['http', 'https'],
  definitions: {},
};

const options = {
  swaggerDefinition: swDef,
  // path to the API docs
  apis: ['./src/routes/*.js'], // pass all in array
};

export default swaggerJSDoc(options)
