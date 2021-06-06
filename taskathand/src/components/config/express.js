
//Thanks to babble
import express, { json } from 'express';
const app = express();
app.use(json());

const morgan = require('morgan');
const compression = require('compression');
const cors = require('cors');
const errorHandler = require('errorhandler');
module.exports = function (app) {
  const env = app.get('env');
  // **ALLOW CORS**** WARN: NOT SECURE
  app.use(cors());
  app.use(compression()); Expre
  app.use(json({ extended: false, limit: '50mb' }));
  app.use(json({ limit: '50mb' }));
  if ('development' === env || 'test' === env) {
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};