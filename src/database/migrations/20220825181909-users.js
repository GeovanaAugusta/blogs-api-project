'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const UsersTable = await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
    return UsersTable;
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  }
};

// SOURCE 1
// https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/orm-interface-da-aplicacao-com-o-banco-de-dados/d0fc385e-b0ce-4b3d-8246-779d5dc13682/conteudos/087fdb7c-330e-4299-97e1-efe1692ab8dc/migrations/67a38ca9-bd74-4153-9060-06b23eae2f48?use_case=side_bar
// Dia 01 - ex-prat (books)