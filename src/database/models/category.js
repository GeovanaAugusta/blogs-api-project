module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });

  return Category;
};

// SOURCE 2
// Dia 01 - ex-prat (books) e app-with-sequelize