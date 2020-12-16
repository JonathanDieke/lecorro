'use strict';

module.exports = (sequelize, DataTypes) => {
  var Level_Study = sequelize.define('Level_Study', {
    id : DataTypes.INTEGER,
    level_id: DataTypes.INTEGER,
    study_id: DataTypes.INTEGER, 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here 
      }
    }
  });
  return Level_Study;
};