const validationUser = {
  validateUser: async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;

  if (!emailRegex.test(email)) {
 return res.status(400)
  .json({ message: '"email" must be a valid email' }); 
}

  if (displayName.length < 8) {
    res.status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (password.length < 6) {
    res.status(400).json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
},
};

module.exports = {
  validationUser,
};
