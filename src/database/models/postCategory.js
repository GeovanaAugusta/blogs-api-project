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
      as: 'blogPosts',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      as: 'categories',  
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }

  return PostCategory;
};

