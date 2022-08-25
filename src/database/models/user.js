module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'id', as: 'BlogPost' });
  };

  return User;
};

// SOURCE 2
// Dia 01 - ex-prat (books) e app-with-sequelize