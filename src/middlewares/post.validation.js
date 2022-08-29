const validationPost = {
  validatePost: async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (categoryIds === undefined) {
 return res.status(400)
  .json({ message: '"categoryIds" not found' }); 
}

  if (title === '' || content === '' || categoryIds.length === 0) {
    res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
},
};

module.exports = {
  validationPost,
};