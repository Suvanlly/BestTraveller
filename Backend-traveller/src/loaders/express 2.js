const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const apiRouter = require('../routes/v1/api');
const config = require('../config/app');

module.exports = async (app) => {
  app.use(logger('dev'));
  app.use(express.static('public'))
  app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
  app.use(express.json());
  app.use(config.api.prefix, apiRouter);
  return app;
};
