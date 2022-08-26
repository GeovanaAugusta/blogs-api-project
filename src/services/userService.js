const { User } = require('../database/models');

const userService = {
  
  createToken: async ({ email }) => {
    const result = await User.findOne({ where: { email } });
    console.log(result); 
    return result;
  },
};

module.exports = {
userService, 
};

// SOURCE 3
// Dia 3 - nodejs-jwt-base-project