const { BlogPost, sequelize, PostCategory, Category, User } = require('../database/models');

const postService = {

  createPost: async (body, id) => {
    console.log('categoryIds', body.categoryIds);
    // Verificar primeiro se a categoria existe 
    const { rows } = await Category.findAndCountAll({ where: { id: body.categoryIds } });
    // console.log('rows', rows.length, 'categoryIds', body.categoryIds.length);

    if (rows.length !== body.categoryIds.length) return false;
    // Criar de fato novo blog post
    const result = await sequelize.transaction(async (transaction) => {
      // console.log(typeof id);
      const create = await BlogPost.create({ title: body.title, 
        content: body.content,
        userId: id },  
    { transaction });
    // console.log('create', create);
  const infos = body.categoryIds.map((category) => ({
    postId: create.dataValues.id, categoryId: category,
  }));
  await PostCategory.bulkCreate(infos, { transaction });
    return create.dataValues;
});
      // console.log('result', result);
      return result;
  },

  getAll: async () => {
    const result = await BlogPost.findAll({ include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] } },
      ], 
    });
    if (!result) return null;
    // console.log('result getAll', result); 
    return result; 
  },

  getById: async (id) => {
    const result = await BlogPost.findOne({ where: { id },
      include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories', through: { attributes: [] } },
    ], 
     });
    if (!result) return null;
    // console.log(result); 
    return result; 
  },

  update: async ({ title, content }, id, userId) => {
    // console.log(('body', title, content));
    // console.log('userId service', userId);
    const verifyAuthorization = await BlogPost.findOne({ where: { id } });
    // console.log('verifyAuthorization', verifyAuthorization.dataValues.userId, 
    // 'userId', userId);
    if (verifyAuthorization.dataValues.userId !== userId) return false;

    const getObjectId = await postService.getById(id);
    const result = await getObjectId.update(
      { 
        title, 
        content, 
      }, 
      { where: { id } },
    );
    // console.log('update', result); 
    return result; 
  },
};

module.exports = {
postService, 
};

// SOURCE 12
// https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findandcountall para verificar a existência da categoria
// https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-associations/043e2e8a-c28e-4b95-a949-b7c43221ca8d/conteudos/82c3bd70-4da0-4a85-bf56-cce8d3f8c186/transacoes/f3380a7b-62b1-4ed2-b350-3d12497b2536?use_case=side_bar
// SOURCE 13
// https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-associations/043e2e8a-c28e-4b95-a949-b7c43221ca8d/conteudos/82c3bd70-4da0-4a85-bf56-cce8d3f8c186/relacionamentos-nn/c8438dd6-a43d-42fe-aa52-66baa9ca23c3?use_case=side_bar
// SOURCE 14
// https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-associations/043e2e8a-c28e-4b95-a949-b7c43221ca8d/conteudos/82c3bd70-4da0-4a85-bf56-cce8d3f8c186/relacionamentos-nn/c8438dd6-a43d-42fe-aa52-66baa9ca23c3?use_case=side_bar
// SOURCE 15
// Dia 01 - ex-prat (books - update) 