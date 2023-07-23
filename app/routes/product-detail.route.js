const productDetailRoute = require('express').Router();
const productDetailController = require("../controllers//product-detail.controller")


productDetailRoute.get("/", productDetailController.getAll);
productDetailRoute.post('/', productDetailController.create);

module.exports = productDetailRoute;