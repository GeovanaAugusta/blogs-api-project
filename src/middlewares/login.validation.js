const validationLogin = {
  validateLogin: async (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;

  if (!emailRegex.test(email)) {
 return res.status(400)
  .json({ message: 'Some required fields are missing' }); 
}

  if (!email || !password || password === '') {
    res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
},
};

module.exports = {
  validationLogin,
};
