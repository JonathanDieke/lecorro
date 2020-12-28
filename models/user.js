'use strict';

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
    }, 
    register : {
      type : DataTypes.STRING,
    }, 
    email: {
      type : DataTypes.STRING,
    }, 
    name: {
      type : DataTypes.STRING,
    }, 
    lastname: {
      type : DataTypes.STRING,
    }, 
    pseudo: {
      type : DataTypes.STRING,
    }, 
    password: {
      type : DataTypes.STRING, 
    }, 
    isAdmin: {
      type : DataTypes.BOOLEAN
    }, 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here 
      }
    }
  });
  return User;
};