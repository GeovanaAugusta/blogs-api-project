const jwt = require('jsonwebtoken');
const { categoriesService } = require('../services/categoriesService');

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

    jwt.sign({ data: result }, JWT_SECRET, jwtConfig);
    res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
},

getAll: async (_req, res) => {
  try {
  const result = await categoriesService.getAll();
  res.status(200).json(result);
} catch (error) {
  return res.status(500).json({ message: 'Erro interno', error: error.message });
}
},
};

module.exports = { 
  categoriesController,
 };
