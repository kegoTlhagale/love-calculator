import swaggerUi from 'swagger-ui-express'
import { API } from './src/globals'
import logger from './src/utilities/logger'
import spec from './src/swagger/swagger'


const morgan = require('morgan')
const express = require('express')
const app = express()

// The name of your app/service
const serviceName = 'Love Calculator'

// The port which it should listen on
const port = API.PORT

app.use(express.json())
app.use(morgan('dev'))

// routes
require('./src/routes')(app)

app.get('/', (req, res) => res.send('Hello World'))

// swagger: api documentation
app.get('/swagger.json', (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(spec);
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

app.listen(port, () => {
  //calculate()
  logger.log(`${serviceName} listening on port ${port}!`)
})
