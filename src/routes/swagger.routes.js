const express = require('express')
const swaggerUi = require('swagger-ui-express')
const { swaggerSpec } = require('../utilities/swagger')
const router = express.Router()

router.get('/apidoc.json', (req, res) => res.json(swaggerSpec))

router.use('/', swaggerUi.serve)
router.get('/', swaggerUi.setup(swaggerSpec))

module.exports = router
