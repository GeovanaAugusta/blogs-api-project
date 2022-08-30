const jwt = require('jsonwebtoken');
const { userService } = require('../services/userService');

const message = 'Erro interno';
// const secret = 'seusecretdetoken';
// Erro no teste: throw Error('Seu `token` não consegue ser verificado a partir do segredo da variável de ambiente `JWT_SECRET`')

const { JWT_SECRET } = process.env;
// console.log(process.env);

const userController = {

  createLogin: async (req, res) => {
    try {
    const { email, password } = req.body;

    const result = await userService.createLogin({ email });

    if (!result || result.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
  
    const token = jwt.sign({ data: result }, JWT_SECRET, jwtConfig);
    res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message, error: error.message });
  }
},

createUser: async (req, res) => {
  try {
  const { displayName, email, password, image } = req.body;

  const result = await userService.createUser({ displayName, email, password, image });

  if (result === true) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: result }, JWT_SECRET, jwtConfig);
  res.status(201).json({ token });
} catch (error) {
  return res.status(500).json({ message, error: error.message });
}
},

getAll: async (_req, res) => {
  try {
  const result = await userService.getAll();
  res.status(200).json(result);
} catch (error) {
  return res.status(500).json({ message, error: error.message });
}
},

getById: async (req, res) => {
  try {
  const { id } = req.params;
  const result = await userService.getById(id);
  if (!result) return res.status(404).json({ message: 'User does not exist' });
  res.status(200).json(result);
} catch (error) {
  return res.status(500).json({ message, error: error.message });
}
},

remove: async (req, res) => {
  try {
    const userId = req.user.data.id;
    // console.log(userId);
    await userService.remove(userId);
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message, error: error.message });
  }
},
};

module.exports = { 
  userController,
 };

// SOURCE 3
// https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/jwt-json-web-token/acf1c24f-d531-4cf0-be9b-2384e37799d7/conteudos/d22aa12a-a9fd-448f-865a-ec8de7f521e6/implementando-jwt/b81401e2-ade1-4d90-94b9-e6d971915d36?use_case=side_bar
// Dia 3 - nodejs-jwt-base-project

// SOURCE 5
// Dia 3 - nodejs-jwt-base-project - arquivo posts do controllers