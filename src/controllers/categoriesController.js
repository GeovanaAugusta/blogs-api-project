const jwt = require('jsonwebtoken');
const { categoriesService } = require('../services/categoriesService');

// const secret = 'seusecretdetoken';
// Erro no teste: throw Error('Seu `token` não consegue ser verificado a partir do segredo da variável de ambiente `JWT_SECRET`')

const { JWT_SECRET } = process.env;
// console.log(process.env);

const categoriesController = {

  createCategory: async (req, res) => {
    try {
    const { name } = req.body;

    const result = await categoriesService.createCategory({ name });

    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
  
    const token = jwt.sign({ data: result }, JWT_SECRET, jwtConfig);
    console.log(token);
    res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
},
};

module.exports = { 
  categoriesController,
 };
