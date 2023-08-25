const OrderRoute= require('express').Router()
const OrderController = require("./../controllers/order-controller")
OrderRoute.post('/', OrderController.CreateOrder);
OrderRoute.get('/:userid',OrderController.fetchorderforuser)
OrderRoute.post('/updateorderstatus',OrderController.updateorderstatus)

module.exports = OrderRoute;