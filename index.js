import swaggerUi from 'swagger-ui-express'
import { API } from './src/globals'
import logger from './src/utilities/logger'
import spec from './src/swagger/swagger'
const cors = require('cors');

const morgan = require('morgan')
const express = require('express')
const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,  //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

// The name of your app/service
const serviceName = 'Love Calculator'

// The port which it should listen on
const port = API.PORT

app.use(express.json())
app.use(morgan('dev'))

// routes
require('./src/routes')(app)

app.get('/', (req, res) => res.send('Love Calculator Service'))

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
