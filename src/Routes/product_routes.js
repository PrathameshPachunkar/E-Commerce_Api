const ProductRoutes = require('express').Router();
const ProductController = require('./../controllers/product_controller')

ProductRoutes.get('/',ProductController.fetchallproducts)
ProductRoutes.post('/',ProductController.createproduct)
//ProductRoutes.post('/:id',ProductController.fetchproductbyid)
ProductRoutes.post('/category/:id',ProductController.fetchproductsbycategory)

module.exports = ProductRoutes