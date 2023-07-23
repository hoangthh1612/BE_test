const buyerRoute = require('express').Router()
const buyerController = require('../controllers/buyer.controller')

buyerRoute.post('/', buyerController.create);
buyerRoute.get('/', buyerController.getAll);

module.exports = buyerRoute;
