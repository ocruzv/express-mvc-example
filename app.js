const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

/******** Importaciones de controladores *******/

const indexController = require('./controllers/index.js');
const usersController = require('./controllers/users.js');

/******** Finaliza importaciones *******/


// Configuración de express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


/******** Rutas *******/

app.get('/', indexController.get);
app.get('/users', usersController.get);

/******** Finalizan rutas *******/


// Inicializamos el servidor
app.listen(port, () => {
  console.log(`MVC listening at http://localhost:${port}`);
});
