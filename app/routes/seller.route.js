const sellerRoute = require('express').Router();
const sellerController = require("../controllers//seller.controller")


sellerRoute.get("/", sellerController.getAll);
sellerRoute.post('/', sellerController.create);

module.exports = sellerRoute;