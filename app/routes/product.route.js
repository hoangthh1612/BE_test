const productRoute = require("express").Router();
const productController = require("../controllers/product.controller");

productRoute.get('/', productController.getAll);
productRoute.post('/', productController.create);

module.exports = productRoute;
