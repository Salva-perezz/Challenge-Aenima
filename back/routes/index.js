const Router = require('express').Router();
const product = require('./product');

Router.use('/product', product);

module.exports = Router;