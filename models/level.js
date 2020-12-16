'use strict';

module.exports = (sequelize, DataTypes) => {
  var Level = sequelize.define('Level', {
    id : DataTypes.INTEGER,
    libel: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here 
      }
    }
  });
  return Level;
};