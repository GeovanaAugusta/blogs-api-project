// const jwt = require('jsonwebtoken');
const { postService } = require('../services/postService');

// const secret = 'seusecretdetoken';
// Erro no teste: throw Error('Seu `token` não consegue ser verificado a partir do segredo da variável de ambiente `JWT_SECRET`')

// const { JWT_SECRET } = process.env;
// console.log(process.env);

const postController = {

  createPost: async (req, res) => {
    try {
    const { body } = req;
    // console.log(categoryIds);

    const { id } = req.user.data;
    console.log('userId', id);

    const result = await postService.createPost(body, id);

    // const jwtConfig = {
    //   expiresIn: '1d',
    //   algorithm: 'HS256',
    // };
  
    //  jwt.sign({ data: result }, JWT_SECRET, jwtConfig);
    if (!result) return res.status(400).json({ message: '"categoryIds" not found' });
    res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
},

};

module.exports = { 
  postController,
 };
