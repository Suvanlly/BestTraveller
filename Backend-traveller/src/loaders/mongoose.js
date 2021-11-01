/* eslint-disable no-console */
const mongoose = require('mongoose');
const config = require('../config/app');

module.exports = async function () {
  // check DB connection
  const status = mongoose.connection;
  status.on('connected', () => {
    console.log(`DB connected with ${config.mongoConnection}`);
  });

  const connection = await mongoose.connect(config.mongoConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  return connection.connection.db;
};
