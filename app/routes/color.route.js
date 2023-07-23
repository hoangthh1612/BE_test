const colorRoute = require("express").Router();
const colorController = require("../controllers/color.controller");

colorRoute.get('/', colorController.getAll);
colorRoute.post('/', colorController.create);

module.exports = colorRoute;
