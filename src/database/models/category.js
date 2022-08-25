module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });

  return User;
};

// SOURCE 2
// Dia 01 - ex-prat (books) e app-with-sequelize