const { User } = require('../database/models');

const userService = {
  
  createLogin: async ({ email }) => {
    const result = await User.findOne({ where: { email } });
    if (!result) return null;
    // console.log(result); 
    return result;
  },

  createUser: async ({ displayName, email, password, image }) => {
    const checkEmail = await User.findOne({ where: { email } });
    if (checkEmail) return true;
    const result = await User.create({ displayName, email, password, image });
    if (!result) return null;
    // console.log(result); 
    return result;
  },

  getAll: async () => {
    const result = await User.findAll({ attributes: { exclude: 'password' } });
    if (!result) return null;
    // console.log(result); 
    return result; 
  },

  getById: async (id) => {
    const result = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });
    // if (!result) return null;
    // console.log(result); 
    return result; 
  },
};

module.exports = {
userService, 
};

// SOURCE 3
// Dia 3 - nodejs-jwt-base-project

// SOURCE 5
// Dia 3 - nodejs-jwt-base-project - arquivo posts do controllers
// exclude porque no objeto requerido não tem a senha

// SOURCE 6
// Dia 2 - rel-1-1 - arquivo index