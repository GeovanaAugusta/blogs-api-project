'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostCategoriesTable = await queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Categories',
          key: 'id',
        },
      }
    });
    return PostCategoriesTable;
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('PostCategories');
  }
};
