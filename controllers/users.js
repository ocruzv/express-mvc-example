const usersModel = require('../models/users');

async function get(req, res) {
  const users = usersModel.getUsers();

  res.render('users', {
    title: 'Digitalhouse MVC - Users',
    users,
  });
}

module.exports = {
  get,
}