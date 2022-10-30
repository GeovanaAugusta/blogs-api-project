require('dotenv').config();
const app = require('./api');
const { userController } = require('./controllers/userController');
const { validationLogin } = require('./middlewares/login.validation');
const { validationUser } = require('./middlewares/user.validation');
const validationToken = require('./middlewares/auth');
const { validationCategories } = require('./middlewares/categories.validation');
const { categoriesController } = require('./controllers/categoriesController');
const { postController } = require('./controllers/postController');
const { validationPost } = require('./middlewares/post.validation');

const port = process.env.API_PORT || 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.post('/login', validationLogin.validateLogin, userController.createLogin);
app.get('/post/search', validationToken, postController.search);
app.post('/user', validationUser.validateUser, userController.createUser);
app.get('/user', validationToken, userController.getAll);
app.get('/user/:id', validationToken, userController.getById);
app.post('/categories', validationToken, validationCategories.validateCategories, 
categoriesController.createCategory);
app.get('/categories', validationToken, categoriesController.getAll);
app.post('/post', validationToken, validationPost.validatePost, postController.createPost);
app.get('/post', validationToken, postController.getAll);
app.get('/post/:id', validationToken, postController.getById);
app.put('/post/:id', validationToken, validationPost.validatePost, postController.update);
app.delete('/post/:id', validationToken, postController.remove);
app.delete('/user/:id', validationToken, userController.remove);

app.listen(port, () => console.log('ouvindo porta', port));