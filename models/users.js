// const fetch = require('node-fetch');

const usersDatabase = ['Juan', 'Pepe', 'Pedro'];

async function getUsers () {
  return usersDatabase;
}

// async function getUsers () {
//   const usersDatabase = await fetch('https://run.mocky.io/v3/986030fd-66ed-438a-bd07-1842ba7114a4');
//   const parsedUsers = await usersDatabase.json();
  
//   return parsedUsers.users;
// }

module.exports = {
  getUsers,
}