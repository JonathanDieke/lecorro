'use strict';

module.exports = (sequelize, DataTypes) => {
  var Level_Study = sequelize.define('Level_Study', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true
    },
    level_id: {
      type : DataTypes.INTEGER,
    },
    study_id: {
      type : DataTypes.INTEGER, 
    },
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return Level_Study;
};