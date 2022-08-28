const { Category } = require('../database/models');

const categoriesService = {
  
  createCategory: async ({ name }) => {
    const createNewCategory = await Category.create({ name });
    console.log('new category', createNewCategory);
    const result = await Category.findOne({ where: { name } });
    if (!result) return null;
    console.log(result); 
    return result;
  },
};

module.exports = {
categoriesService, 
};