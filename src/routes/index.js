import LoveCalculator from '../controllers/love_calculator.controller'

/**
 * @swagger
 * /calculate:
 *   post:
 *     description: calculate love
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name1:
 *               type: string
 *             name2:
 *               type: string
 *     example:
 *         name1: "Kego"
 *         name2: "Thabo"
 *     responses:
 *       200:
 *         description: calculated love successfully
 *
 *
 *
 *
 *
 */

module.exports = function(app) {
  /**
 * @swagger
 * /calculate:
 *   post:
 *     description: calculate love
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name1:
 *               type: string
 *             name2:
 *               type: string
 *     example:
 *         name1: "Kego"
 *         name2: "Thabo"
 *     responses:
 *       200:
 *         description: calculated love successfully
 *
 *
 *
 *
 *
 */
   
  app.post('/love-calculator/calculate', LoveCalculator.calculate)
}
