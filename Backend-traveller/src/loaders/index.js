const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

exports.init = (expressApp) => {
  mongooseLoader();
  expressLoader(expressApp);
};
