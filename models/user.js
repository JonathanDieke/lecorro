'use strict';

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    register : DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    password: DataTypes.STRING, 
    isAdmin: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here 
      }
    }
  });
  return User;
};