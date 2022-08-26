const { User } = require('../database/models');

const userService = {
  
  createToken: async ({ email }) => {
    const result = await User.findOne({ where: { email } });
    if (!result) return null;
    console.log(result); 
    return result;
  },

  createUser: async ({ displayName, email, password, image }) => {
    const checkEmail = await User.findOne({ where: { email } });
    if (checkEmail) return true;
    const result = await User.create({ displayName, email, password, image });
    if (!result) return null;
    console.log(result); 
    return result;
  },
};

module.exports = {
userService, 
};

// SOURCE 3
// Dia 3 - nodejs-jwt-base-project