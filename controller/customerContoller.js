/* GET customer page. */
exports.customer_get = [
  function(req, res, next) {
  res.render('customer_get', { title: 'Customers page' });
}
];
