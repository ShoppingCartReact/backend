const product = require('./product/product.service.js');
const cart = require('./cart/cart.service.js');
module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(product);
  app.configure(cart);
};
