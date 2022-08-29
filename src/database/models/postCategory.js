module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId:  { type: DataTypes.INTEGER, foreignKey: true },
    categoryId:  { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'PostCategories',
  });


  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      // A maneira que se conecta com o PostCategory, através de..., como tabela de associação
      as: 'blogPosts',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      as: 'categories',
      // Nome da relação
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }

  return PostCategory;
};

// SOURCE
// Mentoria Luá 25/08 https://trybecourse.slack.com/archives/C02TH6V3MC5/p1661448639660799?thread_ts=1660048163.045249&cid=C02TH6V3MC5
// https://github.com/luacomacento/friends-api/blob/friends-dev/src/database/models/CharacterEpisode.js