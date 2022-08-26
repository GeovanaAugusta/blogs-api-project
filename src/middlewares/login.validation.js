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

// SOURCE 3
// Talker Manager Project https://github.com/tryber/sd-020-a-project-talker-manager/pull/24/commits/7fcafd3c02068e8accc2b1ca046e9c6841b27ebb
// E dinâmica anterior à ele, minha sala foi a 29 https://github.com/amandapccs/Dinamica-Sala29