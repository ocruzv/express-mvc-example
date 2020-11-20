function get(req, res) {
  res.render('index', { title: 'Digitalhouse MVC' });
}

module.exports = {
  get,
}