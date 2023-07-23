const sizeRoute = require("express").Router();
const sizeController = require("../controllers/size.controller");

sizeRoute.get('/', sizeController.getAll);
sizeRoute.post('/', sizeController.create);

module.exports = sizeRoute;
