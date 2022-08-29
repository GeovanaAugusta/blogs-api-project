const { BlogPost, sequelize, Category } = require('../database/models');

const postService = {

  createPost: async (body, id) => {
    // console.log('id', id);
    // Só chega categoryIds do body
    // Verificar primeiro se a categoria existe 
    const { rows } = await Category.findAndCountAll({ where: { id: body.categoryIds } });
    // console.log('rows', rows.length, 'categoryIds', body.categoryIds.length);
    if (rows.length !== body.categoryIds.length) return false;
    // Criar de fato novo blog post
    await sequelize.transaction(async (transaction) => {
      console.log(typeof id);
      const create = await BlogPost.create({ title: body.title, 
        content: body.content,
        userId: id },  
    { transaction });
    console.log('create', create);
        });
    },
  };

module.exports = {
postService, 
};

// SOURCE 12
// https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findandcountall para verificar a existência da categoria
// https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-associations/043e2e8a-c28e-4b95-a949-b7c43221ca8d/conteudos/82c3bd70-4da0-4a85-bf56-cce8d3f8c186/transacoes/f3380a7b-62b1-4ed2-b350-3d12497b2536?use_case=side_bar