const CartRoutes = require("express").Router();
const CartController = require("./../controllers/cart_controller")
const ProductController = require('./../controllers/product_controller')

CartRoutes.post('/',CartController.addToCart)
CartRoutes.get('/:user', CartController.findcartforuser)
CartRoutes.delete('/',CartController.removefromcart)


module.exports = CartRoutes