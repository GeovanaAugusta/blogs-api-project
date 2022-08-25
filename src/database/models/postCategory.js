module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId:  { type: DataTypes.INTEGER, foreignKey: true },
    categoryId:  { type: DataTypes.INTEGER, foreignKey: true },
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      as: 'BlogPost',
      foreignKey: 'postId',
      otherKey: 'id',
    });

    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      as: 'Category',
      foreignKey: 'categoryId',
      otherKey: 'id',
    });
  }

  return PostCategory;
};

// SOURCE
// Mentoria Luá 25/08 https://trybecourse.slack.com/archives/C02TH6V3MC5/p1661448639660799?thread_ts=1660048163.045249&cid=C02TH6V3MC5
// https://github.com/luacomacento/friends-api/blob/friends-dev/src/database/models/CharacterEpisode.js