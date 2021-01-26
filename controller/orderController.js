/* GET order page. */
exports.order_get = [
  function(req, res, next) {
  res.render('order_get', { title: 'Order page' });
  }
];