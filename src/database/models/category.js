module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  });

  return Category;
};

// SOURCE 2
// Dia 01 - ex-prat (books) e app-with-sequelize