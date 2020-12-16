'use strict';

module.exports = (sequelize, DataTypes) => {
  var Study = sequelize.define('Study', {
    id : DataTypes.INTEGER,
    level_id: DataTypes.INTEGER,
    name: DataTypes.STRING, 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here 
      }
    }
  });
  return Study;
};