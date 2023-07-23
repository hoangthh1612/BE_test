const categoryRoute = require('express').Router()
const categoryController = require('../controllers/category.controller')

categoryRoute.post('/', categoryController.create);
categoryRoute.get('/', categoryController.getAll);

module.exports = categoryRoute;
