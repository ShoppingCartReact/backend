const product = require('./product/product.service.js');
module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(product);
};
