const { postService } = require('../services/postService');

const postController = {

  createPost: async (req, res) => {
    try {
    const { body } = req;

    const { id } = req.user.data;
    console.log('userId', id);

    const result = await postService.createPost(body, id);

    // console.log('result con', result);
    if (!result) return res.status(400).json({ message: '"categoryIds" not found' });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
},

getAll: async (req, res) => {
  try {
    const result = await postService.getAll();
    // console.log('result controller', result);
   return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
  }
},

};

module.exports = { 
  postController,
 };
