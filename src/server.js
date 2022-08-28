require('dotenv').config();
const app = require('./api');
const { userController } = require('./controllers/userController');
const { validationLogin } = require('./middlewares/login.validation');
const { validationUser } = require('./middlewares/user.validation');
const validationToken = require('./middlewares/auth');
const { validationCategories } = require('./middlewares/categories.validation');
const { categoriesController } = require('./controllers/categoriesController');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', validationLogin.validateLogin, userController.createLogin);
app.post('/user', validationUser.validateUser, userController.createUser);
app.get('/user', validationToken, userController.getAll);
app.get('/user/:id', validationToken, userController.getById);
app.post('/categories', validationToken, validationCategories.validateCategories, 
categoriesController.createCategory);

app.listen(port, () => console.log('ouvindo porta', port));
