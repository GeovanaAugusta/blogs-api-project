const { postService } = require('../services/postService');

const message = 'Erro interno';

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

getById: async (req, res) => {
  try {
  const { id } = req.params;

  const result = await postService.getById(id);
  if (!result) return res.status(404).json({ message: 'Post does not exist' });
  res.status(200).json(result);
} catch (error) {
  return res.status(500).json({ message: 'Erro interno', error: error.message });
}
},

update: async (req, res) => {
  try {
  // const { body } = req;
  // console.log(body);
  // Assim não chega

   const { title, content } = req.body;
  const { id } = req.params;
  const userId = req.user.data.id;
  // console.log(req.user);
  // console.log('userId', userId);
  // console.log('id', typeof id);

  const result = await postService.update({ title, content }, id, userId);

  // console.log('result con', result);
  if (!result) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  return res.status(200).json(result);
} catch (error) {
  return res.status(500).json({ message, error: error.message });
}
},

remove: async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.data.id;
    const checkIfIdExists = await postService.getById(id);
    // console.log(checkIfIdExists);

    const result = await postService.remove(id, userId);
    // console.log('controller', result);
    if (!checkIfIdExists) return res.status(404).json({ message: 'Post does not exist' });
    if (!result) return res.status(401).json({ message: 'Unauthorized user' });
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message, error: error.message });
  }
},

search: async (req, res) => {
  try {
    const { q } = req.query;
    // console.log('query', q);

    const result = await postService.search(q);
    // console.log('controller', result);

    if (!result) return [];
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message, error: error.message });
  }
},

};

module.exports = { 
  postController,
 };
