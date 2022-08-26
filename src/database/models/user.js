module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: { type: DataTypes.STRING, defaultValue: ""},
    email: DataTypes.STRING,
    password: { type: DataTypes.STRING, defaultValue: ""},
    image: { type: DataTypes.STRING, defaultValue: ""},
    // "Field 'displayName' doesn't have a default value" - erro na 4
  },
  {
    timestamps: false,
    tableName: 'Users',
  });


  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'id', as: 'BlogPost' });
  };

  return User;
};

// SOURCE 2
// Dia 01 - ex-prat (books) e app-with-sequelize