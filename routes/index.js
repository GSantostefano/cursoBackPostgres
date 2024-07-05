const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const rangosRouter = require('./rangos.router');
const libroDiarioRouter = require('./librodiarios.router'); // Importamos el router de librodiario

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
  router.use('/rangos', rangosRouter);
  router.use('/librodiario', libroDiarioRouter); // Agregamos el router de librodiario
}

module.exports = routerApi;
